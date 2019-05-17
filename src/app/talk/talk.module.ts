import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TalkComponent} from './talk.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TalkComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TalkComponent
  ]
})
export class TalkModule { }
