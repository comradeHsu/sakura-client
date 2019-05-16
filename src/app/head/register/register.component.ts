import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() closeRegister = new EventEmitter();
  @Output() toLogin = new EventEmitter();

  username: string;
  password: string;
  userType: number;
  confirmPassword: string;

  fail = false;
  message: string;
  constructor(private service: UserService) { }

  ngOnInit() {
  }
  closedDialog() {
    this.closeRegister.emit(false);
  }

  gotoLogin() {
    this.toLogin.emit(true);
  }

  userRegister() {
    if (this.password !== this.confirmPassword) {
      this.failAlert('两次输入的密码不一致');
      return;
    }
    if (this.userType == null) {
      this.failAlert('请选择账号类型');
      return;
    }
    const user = new User();
    user.username = this.username;
    user.password = this.password;
    user.userType = this.userType;
    this.service.register(user).subscribe(res => {
      if (res.code !== 200) {
        this.failAlert(res.message);
      }
      console.log(res.data);
    });
  }

  private failAlert(message: string) {
    this.fail = true;
    this.message = message;
    setTimeout(() => { this.fail = false; }, 2000);
  }
}
