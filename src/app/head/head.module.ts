import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeadNavComponent} from './head-nav/head-nav.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeadNavComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    HeadNavComponent
  ]
})
export class HeadModule { }
