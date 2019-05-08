import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {NewsComponent} from './news/news.component';
import {SchoolsComponent} from './schools/schools.component';
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
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'schools',
    component: SchoolsComponent,
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
