import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../service/school.service';
import {Region} from '../model/region';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private service: SchoolService) { }

  parentRegions: Region[];
  subRegions: Region[];
  parentId: any = '';
  subId: any;
  request: {
    name: null,
    parentId: null,
    subId: null,
    rankingTop: null,
    rankingBottom: null
  };

  ngOnInit() {
    this.getParentRegion();
  }

  getParentRegion(): void {
    this.service.getParentRegion().subscribe(data => {
      this.parentRegions = data.data;
    });
  }

  getSubRegion(): void {
    if (this.parentId === '') {
      this.subRegions = null;
      return;
    }
    this.service.getSubRegion(this.parentId).subscribe(data => {
      this.subRegions = data.data;
    });
  }

}
