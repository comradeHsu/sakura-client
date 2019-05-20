import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {PersonalService} from '../../service/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private service: PersonalService) { }
  actives: string[] = ['active', '', '', ''];
  classes: string[] = ['', '', '', '', '', '', ''];
  allLinks: string[] = ['/personal/personal-center',
    '/personal/recommend',
    '/personal/apply',
    '/personal/data',
    '/personal/view',
    '/personal/view',
    '/personal/view'
  ];
  routerLinks: string[] = ['/personal/personal-center', null, null, null, null, null, null];
  user: User;
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.user = user;
    this.renderProcess();
  }

  togger(index: number): void {
    const styles = ['', '', '', ''];
    styles[index] = 'active';
    this.actives = styles;
  }

  renderProcess(): void {
    const temp: number[] = [4, 5, 8];
    let process: number = this.user.userProcess;
    if (temp.find(data => process === data)) {
      process = 5;
    }
    for (let index = 0; index < process - 1; index ++) {
      this.classes[index] = 'active';
      this.routerLinks[index] = this.allLinks[index];
    }
    this.classes[process - 1] = 'doing';
  }

  sendMessage(index: number) {
    let message;
    switch (index) {
      case 1:
        message = '协议办理结束';
        break;
      case 2:
        message = '取得内诺成功';
        break;
      case 3:
        message = '办理结束等待通知';
        break;
    }
    this.service.view.next(message);
  }
}
