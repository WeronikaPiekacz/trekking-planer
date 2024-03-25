import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { SurveyModel, Model } from 'survey-core';
import { ContrastLightPanelless } from "survey-core/themes";
const surveyJson = {
  title: 'American History',
  showProgressBar: 'bottom',
  firstPageIsStarted: true,
  startSurveyText: 'Start Quiz',
  pages: [
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'civilwar',
          title: 'When was the American Civil War?',
          choices: ['1796-1803', '1810-1814', '1861-1865', '1939-1945'],
          correctAnswer: '1861-1865',
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'libertyordeath',
          title: 'Whose quote is this: "Give me liberty, or give me death"?',
          choicesOrder: 'random',
          choices: [
            'John Hancock',
            'James Madison',
            'Patrick Henry',
            'Samuel Adams',
          ],
          correctAnswer: 'Patrick Henry',
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'magnacarta',
          title: 'What is Magna Carta?',
          choicesOrder: 'random',
          choices: [
            'The foundation of the British parliamentary system',
            'The Great Seal of the monarchs of England',
            'The French Declaration of the Rights of Man',
            'The charter signed by the Pilgrims on the Mayflower',
          ],
          correctAnswer: 'The foundation of the British parliamentary system',
        },
      ],
    },
  ],
};

@Component({
  selector: 'app-survey',
  template: `<survey [model]="surveyModel"></survey>`,
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
