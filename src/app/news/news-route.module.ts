import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {NgModule} from '@angular/core';
import {NewsComponent} from './news/news.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: '',
        redirectTo: 'news-list',
        pathMatch: 'full'
      },
      {
        path: 'news-list',
        component: NewsListComponent
      },
      {
        path: 'detail/:id',
        component: NewsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class NewsRouteModule { }
