import {getAuth, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {app} from "../data-access/firebase/firebase.config"
import {Injectable} from "@angular/core";
import {SessionStoreService} from "../data-access/session/session-store-service";
import {Subject} from "rxjs";


@Injectable({providedIn: "root"})
export class AuthGoogleProvider {
  private readonly provider = new GoogleAuthProvider();
  private readonly auth = getAuth(app)


  constructor(private readonly sessionStoreService: SessionStoreService) {
    this.auth.languageCode = 'pl';
    this.auth.onAuthStateChanged(event => {
      if (event) {
        console.log(event.email)
        const user: User = {id: event.uid, name: event.displayName, photoURL: event.photoURL}
        sessionStoreService.set("user", JSON.stringify(user))
        sessionStoreService.set("isLogIn", "true")
      } else {
        console.error("Something went wrong")
      }
    })

  }

  public handleRedirect() {
    return signInWithRedirect(this.auth, this.provider);
  }

  public logOut() {
    this.sessionStoreService.set("user", "");
    this.sessionStoreService.set("isLogIn", "false")
  }


}

export type User = { id: string, name: string | null, photoURL: string | null }
