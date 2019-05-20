import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PersonalService} from '../../service/personal.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service: PersonalService,
              private route: ActivatedRoute) { }
  message: string;
  ngOnInit() {
    const type: string = this.route.snapshot.queryParams.type;
    switch (type) {
      case `1`:
        this.message = '协议办理结束';
        break;
      case `2`:
        this.message = '取得内诺成功';
        break;
      case `3`:
        this.message = '办理结束等待通知';
        break;
    }
    this.service.view.subscribe(data => this.message = data);
  }

}
