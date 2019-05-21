import { Component, OnInit } from '@angular/core';
import {School} from '../../model/school';
import {ActivatedRoute, Router} from '@angular/router';
import {SchoolService} from '../../service/school.service';
import {MajorRequest} from '../../model/request';
import {Major} from '../../model/major';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  constructor(private router: Router,
              private service: SchoolService,
              private route: ActivatedRoute) { }

  school: School = new School();
  fail = false;
  message: string;
  universityId: number;
  request: MajorRequest = {
    majorName: '',
    degreeType: '',
    page: 1,
    pageCount: 10
  };
  majors: Major[];
  totalCount: number;
  actives: string[] = ['active', '', '', ''];
  ngOnInit() {
    this.getDetail();
    this.getPageMajors();
  }

  getDetail(): void {
    this.universityId = +this.route.snapshot.paramMap.get('id');
    this.service.getSchool(this.universityId).subscribe(data => {
      const code = data.code;
      if (code === 404) {
        this.failAlert(data.message);
      }
      if (code === 200) {
        this.school = data.data as School;
      }
    });
  }

  getPageMajors(): void {
    this.service.getPageMajors(this.request, this.universityId).subscribe(data => {
      this.majors = data.data;
      this.totalCount = data.dataCount;
    });
  }

  activeStyle(index: number): void {
    const styles = ['', '', '', ''];
    styles[index] = 'active';
    this.actives = styles;
    switch (index) {
      case 0:
        this.request.degreeType = '';
        break;
      case 1:
        this.request.degreeType = '本科';
        break;
      case 2:
        this.request.degreeType = '硕士';
        break;
      case 3:
        this.request.degreeType = '博士';
        break;
    }
    this.getPageMajors();
  }

  private failAlert(message: string) {
    this.fail = true;
    this.message = message;
    setTimeout(() => {
      this.fail = false;
      this.router.navigate(['/school']);
    }, 2000);
  }
}
