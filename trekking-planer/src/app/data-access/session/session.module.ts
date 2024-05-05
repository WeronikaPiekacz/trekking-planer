import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionStoreService} from "./session-store-service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SessionStoreService]
})
export class SessionModule {
}
