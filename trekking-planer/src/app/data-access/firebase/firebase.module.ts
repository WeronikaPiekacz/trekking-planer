import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  USER_TREKKING_EQUIPMENT_REPOSITORY_TOKEN,
  UserTrekkingEquipmentRepositoryImpl
} from "./user-trekking-equipment-repository-impl";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: USER_TREKKING_EQUIPMENT_REPOSITORY_TOKEN,
    useClass: UserTrekkingEquipmentRepositoryImpl
  }],
})
export class FirebaseModule {
}
