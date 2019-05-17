import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {RouteModule} from './route.module';
import {HeadModule} from './head/head.module';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NewsModule} from './news/news.module';
import {SchoolModule} from './school/school.module';
import {PersonalModule} from './personal/personal.module';
import {FloatNavComponent} from './float-nav/float-nav.component';
import {TalkComponent} from './talk/talk.component';
import {ResponseInterceptor} from './guard/ResponseInterceptor';
import {TalkModule} from './talk/talk.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FloatNavComponent
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
    PersonalModule,
    TalkModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
