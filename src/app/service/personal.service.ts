import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {ResponseResult} from '../model/response';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getToken(): Observable<ResponseResult> {
    const url = 'http://localhost:8080/qiniu/token';
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  editUserIcon(user: User): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user`;
    const token = sessionStorage.getItem('token');
    this.httpOptions.headers = this.httpOptions.headers.append('Token', token);
    return this.http.patch(url, user, this.httpOptions).pipe(map(res => res as ResponseResult));
  }
}
