import { Component, OnInit } from '@angular/core';
import {TalkService} from '../service/talk.service';
import {PersonalService} from '../service/personal.service';

@Component({
  selector: 'app-float-nav',
  templateUrl: './float-nav.component.html',
  styleUrls: ['./float-nav.component.css']
})
export class FloatNavComponent implements OnInit {

  isTalk: boolean = false;

  constructor(private service: PersonalService) { }

  ngOnInit() {
  }

  openTalk(): void {
    const token = sessionStorage.getItem('token');
    if (token === null) {
      this.service.loginExpired.next(true);
      return;
    }
    this.isTalk = true;
  }

  closeTalk(value): void {
    this.isTalk = value;
  }
}
