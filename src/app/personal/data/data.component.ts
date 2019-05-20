import { Component, OnInit } from '@angular/core';
import {Agreement, User} from '../../model/user';
import {PersonalService} from '../../service/personal.service';
import {Common} from '../../model/common';
import {Qiniu} from '../../model/file';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private service: PersonalService) { }

  user: User;
  token: string;
  agreement: Agreement = new Agreement();
  childrens: User[];
  existAgreement: Agreement;
  status: { [key: number]: boolean; } = {
    1: true,
    2: true,
    3: true,
    4: true,
  };
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.user = user;
    this.agreement.userId = null;
    if (user.userType === 1) {
      this.agreement.userId = user.id;
    } else {
      this.service.getChildrens().subscribe(data => this.childrens = data.data);
    }
    this.service.getToken().subscribe(data => this.token = data.data);
    this.getAgreement();
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

  /**
   * 上传其他资料
   * param {FileList} files
   */
  uploadFile(files: FileList): void {
    const image: File = files[0];
    if (this.agreement.userId === null) {
      alert('请选择学生账号');
      return;
    }
    this.service.getUploadUrl(image, this.token).pipe(flatMap(data => {
      const dat = data as Qiniu;
      const imageUrl = `${Common.QINIU_DOMAIN}/${dat.key}`;
      return this.service.uploadFile({userId: this.agreement.userId, fileUrl: imageUrl});
    })).subscribe(data => alert(data.message));
  }

  /**
   * getAgreement
   */
  getAgreement(): void {
    this.service.getUserAgreement().subscribe(data => {
      this.existAgreement = data.data;
      console.log(data.data);
      if (this.existAgreement.apply) {
        this.status[1] = false;
      }
      if (this.existAgreement.train) {
        this.status[2] = false;
      }
      if (this.existAgreement.visa) {
        this.status[3] = false;
      }
      if (this.existAgreement.otherFile) {
        this.status[4] = false;
      }
    });
  }

}
