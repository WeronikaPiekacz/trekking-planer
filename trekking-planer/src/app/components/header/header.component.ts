import {Component} from '@angular/core';
import {UserService} from "../../auth/user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly userService: UserService) {
  }

  logIn() {
    return this.userService.handleRedirect();
  }

  logOut() {
    return this.userService.logOut();
  }

  getUser() {
    return this.userService.getUser();
  }

  isLogIn() {
    return this.userService.isLogIn();
  }

  get isUserLoaded() {
    return this.userService.isLoaded$.value;
  }

}

