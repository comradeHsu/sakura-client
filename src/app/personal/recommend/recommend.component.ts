import { Component, OnInit } from '@angular/core';
import {School} from '../../model/school';
import {SchoolService} from '../../service/school.service';
import {Page} from '../../model/page';
import {PersonalService} from '../../service/personal.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  constructor(private service: PersonalService) { }

  schools: School[];
  request: Page = new Page();
  totalCount: number;
  ngOnInit() {
    this.request.page = 1;
    this.request.pageCount = 5;
    this.getRecommend();
  }

  getRecommend(): void {
    this.service.getRecommend(this.request).subscribe(data => {
      this.schools = data.data;
      this.totalCount = data.dataCount;
    });
  }

  apply(id: number): void {
    this.service.applySchool(id).subscribe(data => {
      alert(data.message);
      const user: User = JSON.parse(sessionStorage.getItem('user'));
      if (user.userProcess < 3) {
        user.userProcess = 3;
      }
      sessionStorage.setItem('user', JSON.stringify(user));
      this.service.userProcess.next(true);
    });
  }
}
