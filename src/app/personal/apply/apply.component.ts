import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor() { }

  assessed: boolean;
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    console.log(user.assessed);
    this.assessed = user.assessed;
  }

}
