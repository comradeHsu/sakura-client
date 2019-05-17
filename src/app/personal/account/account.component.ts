import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PersonalService} from '../../service/personal.service';
import {File, Qiniu} from '../../model/file';
import {Common} from '../../model/common';
import {flatMap, map} from 'rxjs/operators';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private http: HttpClient,
              private service: PersonalService,
              private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json'})
  };

  token: string;
  file: File = new File();
  user: User = new User();
  passwordData: {newPassword: string, oldPassword: string} = {newPassword: null, oldPassword: null};
  fail: boolean = false;
  message: string;
  realName: string;
  parents: User[];
  ngOnInit() {
    this.service.getToken().subscribe(data => {
      this.token = data.data;
    });
    this.userService.getUserInfo().subscribe(data => {
      this.user = data.data;
      if (this.user.icon != null) {
        this.file.status = true;
        this.file.value = this.user.icon;
      }
    });
    this.service.getParents().subscribe(data => {this.parents = data.data; });
  }

  upload(value: FileList) {
    console.log(value);
    const thisFile: any = value[0];
    this.file.value = thisFile.name;
    this.file.status = true;

    const formData: FormData = new FormData();
    formData.append('file', thisFile, thisFile.name);
    formData.append('token', this.token);
    this.http.post('http://upload-z0.qiniu.com', formData, this.httpOptions)
      .pipe(flatMap(data => {
        const dat = data as Qiniu;
        this.file.value = `${Common.QINIU_DOMAIN}/${dat.key}`;
        const user: User = new User();
        user.icon = this.file.value;
        return this.service.editUser(user);
      })).subscribe(data => console.log(data.message));
  }

  editPassword(): void {
    if (this.passwordData.oldPassword == null) {
      this.failAlert('请填写原密码');
      return;
    }
    if (this.passwordData.newPassword == null) {
      this.failAlert('请填写新密码');
      return;
    }
    this.userService.editPassword(this.passwordData).subscribe(data => {
      this.failAlert(data.message);
    });
  }

  private failAlert(message: string) {
    this.fail = true;
    this.message = message;
    setTimeout(() => { this.fail = false; }, 2000);
  }

  editName(): void {
    if (this.realName == null) {
      this.failAlert('请填写原密码');
      return;
    }
    const user = new User();
    user.realName = this.realName;
    this.service.editUser(user).subscribe(data => {
      console.log(data);
    });
  }

  bindParent(): void {
    this.service.editUser({parentId: this.user.parentId} as User).subscribe(data => {
      this.failAlert(data.message);
    });
  }
}
