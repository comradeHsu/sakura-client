import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {PersonalService} from '../../service/personal.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css'],
  animations: [
    trigger('dialog', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class HeadNavComponent implements OnInit {

  isLogin = false;
  isWillLogin = false;
  isWillRegister = false;
  realName: string;

  constructor(private service: UserService,
              private personalService: PersonalService) { }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (token != null) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      this.isLogin = true;
      this.realName = user.realName;
    }
    this.personalService.loginExpired.subscribe(data => {
      if (data === true) {
        this.isWillLogin = true;
      }
    });
  }

  willLogin() {
    this.isWillLogin = true;
  }
  closeLogin(closed) {
    this.isWillLogin = closed;
  }

  loginSuccess(user: User) {
    this.realName = user.realName;
    this.isLogin = true;
    this.isWillLogin = false;
  }

  loginOut() {
    this.service.loginOut().subscribe(() => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      this.isLogin = false;
    },
      error => console.log(error));
  }

  willRegister() {
    this.isWillRegister = true;
  }

  closeRegister(closed) {
    this.isWillRegister = closed;
  }

  gotoLogin() {
    this.isWillRegister = false;
    this.isWillLogin = true;
  }

  gotoRegister() {
    this.isWillRegister = true;
    this.isWillLogin = false;
  }
}
