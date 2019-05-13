import { Component, OnInit } from '@angular/core';
import {Assessment} from '../../model/user';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor() { }
  assessment: Assessment = new Assessment();
  ngOnInit() {
  }

}
