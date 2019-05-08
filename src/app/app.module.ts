import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {RouteModule} from './route.module';
import {HeadModule} from './head/head.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FootComponent} from './head/foot/foot.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
