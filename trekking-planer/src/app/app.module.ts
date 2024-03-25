import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SurveyModule } from 'survey-angular-ui';
import { SurveyComponent } from './components/survey/survey.component';
import { PlaningComponent } from './components/planing/planing.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SurveyComponent, HomepageComponent, PlaningComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, SurveyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
