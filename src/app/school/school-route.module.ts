import {RouterModule, Routes} from '@angular/router';
import {SchoolsComponent} from './schools/schools.component';
import {NgModule} from '@angular/core';
import {SchoolDetailComponent} from './school-detail/school-detail.component';


const routes: Routes = [
  {
    path: 'school',
    children: [
      {
        path: '',
        redirectTo: 'school-list',
        pathMatch: 'full'
      },
      {
        path: 'school-list',
        component: SchoolsComponent
      },
      {
        path: 'detail/:id',
        component: SchoolDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SchoolRouteModule { }
