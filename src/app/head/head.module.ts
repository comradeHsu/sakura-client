import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeadNavComponent} from './head-nav/head-nav.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import {RouteModule} from '../route.module';

@NgModule({
  declarations: [
    HeadNavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouteModule
  ],
  exports: [
    HeadNavComponent
  ]
})
export class HeadModule { }
