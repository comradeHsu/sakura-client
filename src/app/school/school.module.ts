import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchoolsComponent} from './schools/schools.component';
import {SchoolRouteModule} from './school-route.module';
import {SchoolDetailComponent} from './school-detail/school-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HeadModule} from '../head/head.module';

@NgModule({
  declarations: [
    SchoolsComponent,
    SchoolDetailComponent
  ],
  imports: [
    CommonModule,
    SchoolRouteModule,
    NgbModule,
    FormsModule,
    HeadModule
  ]
})
export class SchoolModule { }
