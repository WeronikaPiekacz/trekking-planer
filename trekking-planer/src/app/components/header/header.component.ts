import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthGoogleProvider, User} from "../../auth/auth-google-provider";
import {BehaviorSubject} from "rxjs";
import {SessionStoreService} from "../../data-access/session/session-store-service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  constructor(private readonly authProvider: AuthGoogleProvider,
              private readonly sessionStoreService: SessionStoreService,
              private readonly cd: ChangeDetectorRef) {
  }

  handleRedirect() {
    return this.authProvider.handleRedirect();
  }

  logOut() {
    return this.authProvider.logOut();
  }

  async displayUser() {
    return this.user$;
  }

  ngOnInit(): void {
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
      this.cd.detectChanges();
    })
    this.isLogIn$.subscribe(x => console.log(x))
  }
}

