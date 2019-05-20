import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NewsRouteModule} from './news-route.module';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsComponent} from './news/news.component';
import {HeadModule} from '../head/head.module';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {SafeHtmlPipe} from '../pipe/SafeHtmlPipe';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsComponent,
    NewsDetailComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NewsRouteModule,
    HeadModule
  ]
})
export class NewsModule { }
