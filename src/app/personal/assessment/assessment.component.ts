import { Component, OnInit } from '@angular/core';
import {Assessment} from '../../model/user';
import {PersonalService} from '../../service/personal.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor(private service: PersonalService) { }
  assessment: Assessment = new Assessment();
  ngOnInit() {
  }

  userAssess(): void {
    console.log(this.assessment);
    this.service.assessment(this.assessment).subscribe(data => console.log(data));
  }
}
