import {Component} from '@angular/core';
import {UserService} from "../../auth/user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly authProvider: UserService) {
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

