import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {RouteModule} from './route.module';
import {HeadModule} from './head/head.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FootComponent} from './head/foot/foot.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NewsModule} from './news/news.module';
import {SchoolModule} from './school/school.module';
import {PersonalModule} from "./personal/personal.module";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HeadModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NewsModule,
    SchoolModule,
    PersonalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
