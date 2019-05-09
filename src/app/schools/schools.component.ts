import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../service/school.service';
import {Region} from '../model/region';
import {Request} from '../model/request';
import {School} from '../model/school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private service: SchoolService) { }

  parentRegions: Region[];
  subRegions: Region[];
  actives: any[] = ['active', '', '', ''];
  request: Request = {
    name: '',
    parentId: '',
    subId: '',
    rankingTop: '',
    rankingBottom: '',
    page: 1
  };
  schools: School[];
  totalCount: number;
  ngOnInit() {
    this.getParentRegion();
    this.search();
  }

  getParentRegion(): void {
    this.service.getParentRegion().subscribe(data => {
      this.parentRegions = data.data;
    });
  }

  getSubRegion(): void {
    if (this.request.parentId === null) {
      this.subRegions = null;
      return;
    }
    this.service.getSubRegion(this.request.parentId).subscribe(data => {
      this.subRegions = data.data;
    });
  }

  activeStyle(index: number): void {
    const styles = ['', '', '', ''];
    styles[index] = 'active';
    this.actives = styles;
    switch (index) {
      case 1:
        this.request.rankingTop = 1;
        this.request.rankingBottom = 10;
        break;
      case 2:
        this.request.rankingTop = 11;
        this.request.rankingBottom = 20;
        break;
      case 3:
        this.request.rankingTop = 21;
        this.request.rankingBottom = 50;
        break;
    }
    this.search();
  }

  search(): void {
    this.service.searchSchools(this.request).subscribe(data => {
      this.schools = data.data;
      this.totalCount = data.dataCount;
    });
  }
}
