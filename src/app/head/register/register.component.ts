import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() closeRegister = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  closedDialog() {
    this.closeRegister.emit(false);
  }

}
