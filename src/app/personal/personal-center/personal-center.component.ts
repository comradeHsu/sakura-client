import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {

  constructor() { }
  user: User;
  isTalk: boolean = false;
  style: any = {};
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.user = user;
  }

  openTalk(): void {
    this.isTalk = true;
  }

  closeTalk(value): void {
    this.isTalk = value;
  }

  mouseEnter() {
    this.style = {'color': '#00b8f5', 'background': 'transparent'};
  }
}
