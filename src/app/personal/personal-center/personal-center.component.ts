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

  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.user = user;
  }

}
