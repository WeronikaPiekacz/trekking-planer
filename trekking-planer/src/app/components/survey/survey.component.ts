import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Model, SurveyModel} from 'survey-core';
import {ContrastLightPanelless} from "survey-core/themes";

const surveyJson = {
  title: 'Chose your trip, we will create equipment for you',
  showProgressBar: 'bottom',
  firstPageIsStarted: true,
  startSurveyText: 'Start',
  pages: [
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'Place',
          title: 'Where do you want to go on a trekking trip?',
          choices: ['Mountains', 'Desert', 'Flat terrain', 'Jungle'],
          correctAnswer: 'Mountains',
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'Season',
          title: 'What time of year do you go on trip?',
          choices: ['spring', 'summer', 'autumn', 'winter'],
          correctAnswer: 'spring',
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'Accommodation',
          title: 'Where are you planning to spend the night?',
          choices: [
            'tent',
            'shelter',
            'hotel',
          ],
          correctAnswer: 'tent',
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'Food',
          title: 'What will you feed on?',
          choices: [
            'Restaurants',
            'Food rations',
            'I will hunt',
          ],
          correctAnswer: 'I will hunt',
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'Distance',
          title: 'How long is your trip?',
          choices: [
            'short',
            'long'
          ],
          correctAnswer: 'short',
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
  @Output() submitSurvey = new EventEmitter<any>();

  @Input() json: object | undefined;
  result: any;
  survey: SurveyModel | undefined;

  surveyModel: Model = new Model(surveyJson);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.surveyModel.applyTheme(ContrastLightPanelless)
  }
}
