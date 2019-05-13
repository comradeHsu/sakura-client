import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import {PersonalRouteModule} from './personal-route.module';
import {PersonalCenterComponent} from './personal-center/personal-center.component';
import {ApplyComponent} from './apply/apply.component';
import {AccountComponent} from './account/account.component';
import {HeadModule} from '../head/head.module';
import {AssessmentComponent} from './assessment/assessment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {LoginGuard} from '../guard/login.guard';

@NgModule({
  declarations: [
    PersonalComponent,
    PersonalCenterComponent,
    ApplyComponent,
    AccountComponent,
    AssessmentComponent
  ],
  imports: [
    CommonModule,
    PersonalRouteModule,
    HeadModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    LoginGuard
  ],
})
export class PersonalModule { }
