import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {RouteModule} from './route.module';
import {HeadModule} from './head/head.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NewsComponent} from './news/news.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SchoolsComponent} from './schools/schools.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HeadModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
