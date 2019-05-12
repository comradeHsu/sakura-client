import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {NewsListComponent} from './news/news-list/news-list.component';
import {SchoolsComponent} from './school/schools/schools.component';
import {TalkComponent} from "./talk/talk.component";
/**
 * Created by xuhui on 2019/05/07.
 */

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'news-list',
    component: NewsListComponent,
  },
  {
    path: 'schools',
    component: SchoolsComponent,
  },
  {
    path: 'talk',
    component: TalkComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
