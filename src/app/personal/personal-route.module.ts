import {PersonalComponent} from './personal/personal.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalCenterComponent} from './personal-center/personal-center.component';
import {ApplyComponent} from './apply/apply.component';
import {AccountComponent} from './account/account.component';
import {AssessmentComponent} from "./assessment/assessment.component";

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal-center',
        pathMatch: 'full'
      },
      {
        path: 'personal-center',
        component: PersonalCenterComponent
      },
      {
        path: 'apply',
        component: ApplyComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  },
  {
    path: 'assessment',
    component: AssessmentComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PersonalRouteModule { }
