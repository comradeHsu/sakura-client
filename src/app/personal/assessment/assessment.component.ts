import { Component, OnInit } from '@angular/core';
import {Assessment, User} from '../../model/user';
import {PersonalService} from '../../service/personal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor(private service: PersonalService,
              private route: Router) { }
  assessment: Assessment = new Assessment().init();
  ngOnInit() {
  }

  userAssess(): void {
    if (!this.dataValidation()) {
      return;
    }
    this.service.assessment(this.assessment).subscribe(data => {
      const user: User = JSON.parse(sessionStorage.getItem('user'));
      user.assessed = true;
      if (user.userProcess < 2) {
        user.userProcess = 2;
      }
      sessionStorage.setItem('user', JSON.stringify(user));
      this.route.navigate(['/personal/recommend']);
    });
  }

  private dataValidation(): boolean {
    console.log(this.assessment);
    if (this.assessment.school == null) {
      alert('请填写学校');
      return false;
    }
    if (this.assessment.schoolType == null) {
      alert('请选择学校类型');
      return false;
    }
    if (this.assessment.major == null) {
      alert('请填写专业');
      return false;
    }
    if (this.assessment.toefl == null) {
      alert('请填写托福分数');
      return false;
    }
    if (this.assessment.schoolGpa == null) {
      alert('请选择学校GPA满分');
      return false;
    }
    if (this.assessment.gpa == null) {
      alert('请选择GPA分数');
      return false;
    }
    if (this.assessment.score == null) {
      alert('请选择自我评分');
      return false;
    }
    return true;
  }
}
