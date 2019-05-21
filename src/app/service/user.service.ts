import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {ResponseResult} from '../model/response';
import {User} from '../model/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  userLogin(username: string, password: string): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user/session`;
    return this.http.post(url, {username, password}, this.httpOptions)
      .pipe(map(res => {
        return res as ResponseResult;
      }));
  }
  loginOut(): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user/session`;
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    return this.http.delete(url, {headers})
      .pipe(map(res => {
        return res as ResponseResult;
      }));
  }

  register(user: User): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user`;
    return this.http.post(url, user).pipe(map(res => {
      return res as ResponseResult;
    }));
  }

  getUserInfo(): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user/info`;
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    return this.http.get(url, {headers}).pipe(map(res => res as ResponseResult));
  }

  editPassword(data: {newPassword: string, oldPassword: string}): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user/password`;
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    return this.http.put(url, data, {headers}).pipe(map(res => res as ResponseResult));
  }
}
