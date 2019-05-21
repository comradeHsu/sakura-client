import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {PersonalService} from '../../service/personal.service';
import {RouterOutlet} from '@angular/router';
import {RouteAnimation} from '../../animations/route-animations';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  animations: [
    RouteAnimation
  ]
})
export class PersonalComponent implements OnInit {

  constructor(private service: PersonalService,
              private userService: UserService) { }
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
    this.service.userProcess.subscribe(() => {
      this.userService.getUserInfo().subscribe(data => {
        this.user = data.data;
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.renderProcess();
      });
    });
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
    if (process === 6) {
      process = 4;
    }
    if (process === 7) {
      process = 6;
    }
    if (process === 9) {
      process = 7;
    }
    for (let index = 0; index < process - 1; index ++) {
      this.classes[index] = 'active';
      this.routerLinks[index] = this.allLinks[index];
      if (index === 1) {
        this.routerLinks[index] = '/personal/apply-school';
      }
    }
    this.classes[process - 1] = 'doing';
    this.routerLinks[process - 1] = this.allLinks[process - 1];
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
