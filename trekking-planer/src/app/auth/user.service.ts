import {getAuth, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {app} from "../data-access/firebase/firebase.config"
import {Injectable} from "@angular/core";
import {SessionStoreService} from "../data-access/session/session-store-service";
import {BehaviorSubject} from "rxjs";
import {User} from "./user";
import {UserRepository} from "./user-repository";


@Injectable({providedIn: "root"})
export class UserService {
  private readonly provider = new GoogleAuthProvider();
  private readonly auth = getAuth(app)
  private isLogIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private user$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);


  constructor(private readonly sessionStoreService: SessionStoreService,
              private readonly repository: UserRepository) {
    this.auth.languageCode = 'pl';
    this.auth.onAuthStateChanged(event => {
      if (event) {
        let user: User = {name: event.displayName, email: event.email, photoURL: event.photoURL}
        this.createOrGetUser(user)
          .then(user => {
            sessionStoreService.set("user", JSON.stringify(user))
            sessionStoreService.set("isLogIn", "true")
          })
      }
    })
    this.sessionStoreService.subscribe(x => {
      if (x.key == "isLogIn") {
        console.log(x.value)
        this.isLogIn$.next(x.value == "true")
      }
      if (x.key == "user") {
        if (x.value == "") {
          return;
        }
        const user = JSON.parse(x.value) as User
        this.user$.next(user)
      }
    })

  }

  public handleRedirect() {
    return signInWithRedirect(this.auth, this.provider);
  }

  public async logOut() {
    this.sessionStoreService.set("user", "");
    this.user$.next(undefined);
    this.isLogIn$.next(false);
    this.sessionStoreService.set("isLogIn", "false");
    await this.auth.signOut();
  }

  public isLogIn() {
    return this.isLogIn$.value;
  }

  public getUser() {
    return this.user$.value;
  }

  private async createOrGetUser(user: User) {
    let toReturn = await this.repository.findUserByEmail(user.email as string)
    if (!toReturn) {
      const response = await this.repository.save(user);
      user.id = response.id;
      return user;
    }
    return toReturn;
  }
}

