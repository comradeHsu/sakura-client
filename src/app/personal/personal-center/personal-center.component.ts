import {Component, Input, OnInit} from '@angular/core';
import {Assessment, User} from '../../model/user';
import {PersonalService} from '../../service/personal.service';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {

  constructor(private service: PersonalService) {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.user = user;
    if (user.userProcess > 1) {
      this.service.getAssessment().subscribe(data => this.assessment = data.data);
    }
  }
  user: User;
  isTalk: boolean = false;
  style: any = {};
  assessment: Assessment = new Assessment();
  ngOnInit() {
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
