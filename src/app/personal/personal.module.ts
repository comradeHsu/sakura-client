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
import {RecommendComponent} from './recommend/recommend.component';
import {TalkModule} from '../talk/talk.module';
import {DataComponent} from './data/data.component';
import {ViewComponent} from './view/view.component';
import {AssessmentPipe} from '../pipe/assessmentPipe';
import {ApplySchoolComponent} from "./apply-school/apply-school.component";

@NgModule({
  declarations: [
    PersonalComponent,
    PersonalCenterComponent,
    ApplyComponent,
    AccountComponent,
    AssessmentComponent,
    RecommendComponent,
    DataComponent,
    ViewComponent,
    AssessmentPipe,
    ApplySchoolComponent
  ],
  imports: [
    CommonModule,
    PersonalRouteModule,
    HeadModule,
    NgbModule,
    FormsModule,
    TalkModule
  ],
  providers: [
    LoginGuard
  ],
})
export class PersonalModule { }
