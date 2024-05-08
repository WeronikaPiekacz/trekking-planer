import {Component} from '@angular/core';
import {TrekkingEquipment,} from '../../business-logic/trekking-equipment.service';
import {SurveyResponse} from '../survey/survey.component';
import {TrekkingService} from "../../business-logic/trekking.service";
import {UserService} from "../../auth/user.service";

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss',
})
export class PlaningComponent {
  protected loading = false;
  protected response?: TrekkingEquipment;
  private userRequest?: SurveyResponse;

  constructor(
    private readonly service: TrekkingService,
    private readonly userService: UserService
  ) {
  }

  async processResponse($event: SurveyResponse) {
    this.loading = true;
    this.userRequest = $event;
    this.response = await this.service.generate($event);
    this.loading = false;
    console.log(this.response);
  }

  async saveEquipment() {
    const user = this.userService.getUser();
    if (!user) {
      console.warn("User not logged. Can't save equipment.")
      return
    }

    if (!this.response) {
      console.warn("Can't save empty response.")
      return
    }

    if (!this.userRequest) {
      console.warn("Request is not defined")
      return
    }

    await this.service.save(user.id as string, this.userRequest, this.response)
  }

  joinArray(array: string[]): string {
    return array.join(', ');
  }
}
