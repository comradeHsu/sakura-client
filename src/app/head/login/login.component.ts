import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() closeStatus = new EventEmitter();

  closed = false;
  fail = false;
  message: string;
  username: string;
  password: string;

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  closedDialog() {
    console.log(this.closed);
    this.closeStatus.emit(this.closed);
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    this.service.userLogin(this.username, this.password).subscribe(res => {
      console.log(res);
      const code = res.code;
      if (code !== 200) {
        this.fail = true;
        this.message = res.message;
        setTimeout(() => { this.fail = false; }, 2000);
      } else {
        console.log(res);
      }
    });
  }

}
