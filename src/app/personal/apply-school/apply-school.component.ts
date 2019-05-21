import { Component, OnInit } from '@angular/core';
import {PersonalService} from '../../service/personal.service';
import {School} from '../../model/school';

@Component({
  selector: 'app-apply-school',
  templateUrl: './apply-school.component.html',
  styleUrls: ['./apply-school.component.css']
})
export class ApplySchoolComponent implements OnInit {

  constructor(private service: PersonalService) { }

  school: School = new School();
  ngOnInit() {
    this.service.getApplySchool().subscribe(data => this.school = data.data);
  }

}
