import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PersonalService} from '../../service/personal.service';
import {File, Qiniu} from '../../model/file';
import {Common} from '../../model/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private http: HttpClient,
              private service: PersonalService) { }

  httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json'})
  };

  token: string;
  file: File = new File();
  ngOnInit() {
    this.service.getToken().subscribe(data => {
      this.token = data.data;
    });
  }

  upload(value: FileList) {
    console.log(value);
    const thisFile = value[0];
    this.file.value = thisFile.name;
    this.file.status = true;

    const formData: FormData = new FormData();
    formData.append('file', thisFile, thisFile.name);
    formData.append('token', this.token);
    this.http.post('http://upload-z0.qiniu.com', formData, this.httpOptions)
      .subscribe(data => {
          const dat = data as Qiniu;
          this.file.value = `${Common.QINIU_DOMAIN}/${dat.key}`;
          console.log(this.file.value);
        }
      );
  }
}
