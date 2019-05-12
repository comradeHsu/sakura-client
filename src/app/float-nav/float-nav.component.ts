import { Component, OnInit } from '@angular/core';
import {TalkService} from "../service/talk.service";

@Component({
  selector: 'app-float-nav',
  templateUrl: './float-nav.component.html',
  styleUrls: ['./float-nav.component.css']
})
export class FloatNavComponent implements OnInit {

  isTalk: boolean = false;

  constructor(private service: TalkService) { }

  ngOnInit() {
  }

  openTalk(): void {
    this.isTalk = true;
  }

  closeTalk(value): void {
    this.isTalk = value;
  }
}
