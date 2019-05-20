import {PersonalComponent} from './personal/personal.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalCenterComponent} from './personal-center/personal-center.component';
import {ApplyComponent} from './apply/apply.component';
import {AccountComponent} from './account/account.component';
import {AssessmentComponent} from './assessment/assessment.component';
import {LoginGuard} from '../guard/login.guard';
import {RecommendComponent} from './recommend/recommend.component';
import {DataComponent} from './data/data.component';
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
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
      },
      {
        path: 'recommend',
        component: RecommendComponent
      },
      {
        path: 'data',
        component: DataComponent
      },
      {
        path: 'view',
        component: ViewComponent
      }
    ]
  },
  {
    path: 'assessment',
    component: AssessmentComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PersonalRouteModule { }
