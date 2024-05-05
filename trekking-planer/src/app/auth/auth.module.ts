import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGoogleProvider} from "./auth-google-provider";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGoogleProvider
  ]
})
export class AuthModule {
}
