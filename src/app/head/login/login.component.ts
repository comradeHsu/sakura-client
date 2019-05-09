import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() closeStatus = new EventEmitter();
  @Output() successLogin = new EventEmitter();
  @Output() toRegister = new EventEmitter();

  closed = false;
  fail = false;
  message: string;
  username: string;
  password: string;
  realName: string;

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  closedDialog() {
    this.closeStatus.emit(this.closed);
  }

  login() {
    this.service.userLogin(this.username, this.password).subscribe(res => {
      const code = res.code;
      if (code !== 200) {
        this.fail = true;
        this.message = res.message;
        setTimeout(() => { this.fail = false; }, 2000);
      } else {
        const user = res.data.user;
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.successLogin.emit(user);
      }
    });
  }

  gotoRegister() {
    this.toRegister.emit(true);
  }

}
