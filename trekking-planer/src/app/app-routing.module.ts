import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaningComponent } from './components/planing/planing.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent

  },
  {
    path: 'planing',
    component: PlaningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
