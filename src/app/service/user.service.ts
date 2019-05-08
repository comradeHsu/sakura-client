import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {ResponseResult} from '../model/response';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  userLogin(username: string, password: string): Observable<ResponseResult> {
    const url = 'http://localhost:8080/api/user/session';
    return this.http.post(url, {username, password}, this.httpOptions)
      .pipe(map(res => {
        return res as ResponseResult;
      }));
  }
  loginOut(): Observable<ResponseResult> {
    const url = 'http://localhost:8080/api/user/session';
    const token = sessionStorage.getItem('token');
    this.httpOptions.headers = this.httpOptions.headers.append('Token', token);
    return this.http.delete(url, this.httpOptions)
      .pipe(map(res => {
        return res as ResponseResult;
      }));
  }

  register(user: User): Observable<ResponseResult> {
    const url = 'http://localhost:8080/api/user';
    return this.http.post(url, user).pipe(map(res => {
      return res as ResponseResult;
    }));
  }
}
