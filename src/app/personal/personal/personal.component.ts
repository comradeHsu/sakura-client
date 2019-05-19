import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {RouterOutlet} from '@angular/router';
import {RouteAnimation} from '../../animations/route-animations';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  animations: [
    RouteAnimation
  ]
})
export class PersonalComponent implements OnInit {

  constructor() { }
  actives: string[] = ['active', '', '', ''];
  classes: string[] = ['', '', '', '', '', '', ''];
  allLinks: string[] = ['/personal/personal-center',
    '/personal/recommend',
    '/personal/apply',
    '/personal/data',
    null,
    null,
    null
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
