import {Component, Inject} from '@angular/core';
import {ITrekkingEquipmentService} from "../../business-logic/trekking-equipment.service";
import {TREKKING_SERVICE_TOKEN} from "../../data-access/ai/ai-trekking-equipment.service";
import {SurveyResponse} from "../survey/survey.component";

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss'
})
export class PlaningComponent {


  constructor(@Inject(TREKKING_SERVICE_TOKEN) private readonly service: ITrekkingEquipmentService) {
  }


  async processResponse($event: SurveyResponse) {
    const response = await this.service.generate(this.generatePrompt($event));
    console.log(response)

  }

  private generatePrompt(response: SurveyResponse): string {
    return `Prepare my equipment for a ${response.period} trekking trip. I will feed myself by ${response.food}. I will stay in a ${response.accommodation}. My trip will take place in the  ${response.place} in ${response.season}.`
  }
}
