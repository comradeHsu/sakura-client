import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {ResponseResult} from '../model/response';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';
import {Assessment, User} from '../model/user';
import {Page} from '../model/page';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  /**
   * 用于监听路由拦截的结果
   * @type {BehaviorSubject<any>}
   */
  public loginExpired: BehaviorSubject<boolean> = new BehaviorSubject(null);

  getToken(): Observable<ResponseResult> {
    const url = `http://${environment.domain}/qiniu/token`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  editUser(user: User): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user`;
    const token = sessionStorage.getItem('token');
    this.httpOptions.headers = this.httpOptions.headers.append('Token', token);
    return this.http.patch(url, user, this.httpOptions).pipe(map(res => res as ResponseResult));
  }

  assessment(data: Assessment): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user/assessment`;
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    return this.http.post(url, data, {headers}).pipe(map(res => res as ResponseResult));
  }

  getRecommend(request: Page): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/university/recommend`;
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    const options = { params: new HttpParams().set('page', request.page as string)
        .set('pageCount', request.pageCount as string), headers};
    return this.http.get(url, options).pipe(map(res => res as ResponseResult));
  }

}
