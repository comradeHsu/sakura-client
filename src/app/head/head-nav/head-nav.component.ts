import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent implements OnInit {

  isLogin = false;
  isWillLogin = false;
  isWillRegister = false;
  realName: string;

  constructor(private service: UserService) { }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (token != null) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      this.isLogin = true;
      this.realName = user.realName;
    }
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
    });
  }

  willRegister() {
    this.isWillRegister = true;
  }

  closeRegister(closed) {
    this.isWillRegister = closed;
  }
}
