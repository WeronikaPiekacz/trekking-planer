import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Model, SurveyModel} from 'survey-core';
import {ContrastLightPanelless} from "survey-core/themes";

enum Category {
  PLACE = "place",
  SEASON = "season",
  ACCOMMODATION = "accommodation",
  FOOD = "food",
  PERIOD = "period"
}

export type SurveyResponse = {
  place: string,
  season: string,
  accommodation: string,
  food: string,
  period: string
}

const surveyJson = {
  title: 'Chose your trip, we will create equipment for you',
  showProgressBar: 'bottom',
  firstPageIsStarted: true,
  startSurveyText: 'Start',
  pages: [
    {
      elements: [
        {
          type: 'comment',
          name: Category.PLACE,
          title: 'Where do you want to go on a trekking trip?',
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: Category.SEASON,
          title: 'What time of year do you go on trip?',
          choices: ['spring', 'summer', 'autumn', 'winter'],
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: Category.ACCOMMODATION,
          title: 'Where are you planning to spend the night?',
          choices: [
            'tent',
            'shelter',
            'hotel',
          ]
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: Category.FOOD,
          title: 'What will you feed on?',
          choices: [
            'Restaurants',
            'Food rations',
            'I will hunt',
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: Category.PERIOD,
          title: 'How long is your trip?',
          choices: [
            'one day',
            'few days - week',
            'two weeks - month',
            'month - year'
          ],
        },
      ],
    },
  ],
};

@Component({
  selector: 'app-survey',
  template: `
    <survey [model]="surveyModel"></survey>`,
})
export class SurveyComponent {
  @Output() submitSurvey = new EventEmitter<SurveyResponse>();

  @Input() json: object | undefined;
  result: any;
  survey: SurveyModel | undefined;

  surveyModel: Model = new Model(surveyJson);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.surveyModel.applyTheme(ContrastLightPanelless)
    this.surveyModel.onComplete.add((sender, options) => {
      this.submitSurvey.emit(sender.data)
    })
  }
}
