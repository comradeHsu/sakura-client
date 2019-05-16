import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }
  actives: string[] = ['active', '', '', ''];
  user: User;
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.user = user;
  }

  togger(index: number): void {
    const styles = ['', '', '', ''];
    styles[index] = 'active';
    this.actives = styles;
  }
}
