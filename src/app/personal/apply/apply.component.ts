import { Component, OnInit } from '@angular/core';
import {Agreement, User} from '../../model/user';
import {PersonalService} from '../../service/personal.service';
import {flatMap} from 'rxjs/operators';
import {Qiniu} from '../../model/file';
import {Common} from '../../model/common';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(private service: PersonalService) { }

  assessed: boolean;
  agreement: Agreement = new Agreement();
  token: string;
  user: User;
  childrens: User[];
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.user = user;
    this.agreement.userId = null;
    if (user.userType === 1) {
      this.agreement.userId = user.id;
    } else {
      this.service.getChildrens().subscribe(data => this.childrens = data.data);
    }
    this.assessed = user.assessed;
    this.service.getToken().subscribe(data => this.token = data.data);
  }

  upload(files: FileList, index: number): void {
    const image: File = files[0];
    if (this.agreement.userId === null) {
      alert('请选择学生账号');
      return;
    }
    this.service.getUploadUrl(image, this.token).pipe(flatMap(data => {
      const dat = data as Qiniu;
      const imageUrl = `${Common.QINIU_DOMAIN}/${dat.key}`;
      switch (index) {
        case 1:
          this.agreement.apply = imageUrl;
          break;
        case 2:
          this.agreement.train = imageUrl;
          break;
        case 3:
          this.agreement.visa = imageUrl;
          break;
      }
      return this.service.uploadAgreement(this.agreement);
    })).subscribe(data => console.log(data.message));
  }

}
