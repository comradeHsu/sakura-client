import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent implements OnInit {

  isLogin = false;

  isWillLogin = false;

  constructor() { }

  ngOnInit() {
  }

  willLogin() {
    this.isWillLogin = true;
  }
  closeLogin(closed) {
    this.isWillLogin = closed;
  }

}
