import { Component, OnInit } from '@angular/core';
import {Agreement, User} from '../../model/user';
import {PersonalService} from '../../service/personal.service';

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
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.agreement.userId = user.id;
    this.assessed = user.assessed;
    this.service.getToken().subscribe(data => this.token = data.data);
  }

  upload(files: FileList, index: number): void {
    console.log(files[0]);
    const image: File = files[0];
    // switch (index) {
    //   case 1:
    //     this.agreement.apply = image.name;
    //     break;
    //   case 2:
    //     this.agreement.train = image.name;
    //     break;
    //   case 3:
    //     this.agreement.visa = image.name;
    //     break;
    // }
    const formData: FormData = new FormData();
    formData.append('file', image, image.name);
    formData.append('token', this.token);
  }

}
