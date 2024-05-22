import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  protected selectedPlan?: UserTrekkingEquipment;
  selectedIndex?: number;

  constructor(
    private readonly trekkingService: TrekkingService,
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params;

    this.userService.user$
      .pipe(
        filter((data) => !!data),
        first()
      )
      .subscribe((data) => {
        if (data?.id) {
          this.trekkingService.getByUserId(data?.id).then((data) => {
            this.userTrekkingEquipment = data;
            this.route.params.subscribe((param) => {
              this.selectedIndex = param?.['id'] as unknown as number;
              if (this.selectedIndex && this.userTrekkingEquipment) {
                this.selectedPlan =
                  this.userTrekkingEquipment[this.selectedIndex];
              }
            });
          });
        }
      });
  }

  click(index: any) {
    this.router.navigate(['/history', { id: index }]);
  }

  joinArray(array: string[]): string {
    return array.join(', ');
  }
}
