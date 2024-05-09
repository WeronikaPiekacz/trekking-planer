import { Component } from '@angular/core';
import { filter, first } from 'rxjs';
import { UserService } from 'src/app/auth/user.service';
import {
  QueryHistory,
  TrekkingEquipment,
} from 'src/app/business-logic/trekking-equipment.service';
import { TrekkingService } from 'src/app/business-logic/trekking.service';
import { UserTrekkingEquipment } from 'src/app/business-logic/user-trekking-equipment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  userTrekkingEquipment?: UserTrekkingEquipment[];

  constructor(
    private readonly trekkingService: TrekkingService,
    private readonly userService: UserService
  ) {
    this.userService.user$.pipe(filter(data => !!data), first()).subscribe(data => {
      if (data?.id) {
      this.trekkingService.getByUserId(data?.id).then((data) => {
       this.userTrekkingEquipment = data;
       console.log(this.userTrekkingEquipment);
      }
    )}
    })
  }
}
