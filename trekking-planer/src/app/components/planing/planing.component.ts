import { Component, Inject } from '@angular/core';
import {
  ITrekkingEquipmentService,
  TrekkingEquipment,
} from '../../business-logic/trekking-equipment.service';
import { TREKKING_SERVICE_TOKEN } from '../../data-access/ai/ai-trekking-equipment.service';
import { SurveyResponse } from '../survey/survey.component';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss',
})
export class PlaningComponent {
  protected loading = false;
  protected response?: TrekkingEquipment;

  constructor(
    @Inject(TREKKING_SERVICE_TOKEN)
    private readonly service: ITrekkingEquipmentService
  ) {}

  async processResponse($event: SurveyResponse) {
    this.loading = true;
    this.response = await this.service.generate(this.generatePrompt($event));
    this.loading = false;
    console.log(this.response);
  }

  private generatePrompt(response: SurveyResponse): string {
    return `Prepare my equipment for a ${response.period} trekking trip. I will feed myself by ${response.food}. I will stay in a ${response.accommodation}. My trip will take place in the  ${response.place} during ${response.season}`;
  }

  joinArray(array: string[]): string {
    return array.join(', ');
  }
}
