import {Component} from '@angular/core';
import {handleRedirect} from "../../auth/auth-google-provider";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected readonly handleRedirect = handleRedirect;
}
