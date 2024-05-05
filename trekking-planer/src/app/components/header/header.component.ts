import {Component} from '@angular/core';
import {AuthGoogleProvider} from "../../auth/auth-google-provider";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly authProvider: AuthGoogleProvider) {
  }

  logIn() {
    return this.authProvider.handleRedirect();
  }

  logOut() {
    return this.authProvider.logOut();
  }

  getUser() {
    return this.authProvider.getUser();
  }

  isLogIn() {
    return this.authProvider.isLogIn();
  }

}

