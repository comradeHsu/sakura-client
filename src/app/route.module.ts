import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
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
