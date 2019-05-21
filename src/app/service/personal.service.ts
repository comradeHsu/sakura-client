import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {ResponseResult} from '../model/response';
import {BehaviorSubject, Observable, Subject} from 'rxjs/index';
import {environment} from '../../environments/environment';
import {Agreement, Assessment, User} from '../model/user';
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
   * 用于监听view
   * type {Subject<any>}
   */
  public view: Subject<string> = new Subject<string>();

  /**
   * 用于监听路由拦截的结果
   * type {Subject<any>}
   */
  public loginExpired: Subject<boolean> = new Subject<boolean>();

  /**
   * 用于监听userProcess的变化
   * type {Subject<any>}
   */
  public userProcess: Subject<boolean> = new Subject<boolean>();

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

  getUploadUrl(file: File, token: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('token', token);
    const headers: HttpHeaders = new HttpHeaders({ Accept: 'application/json'});
    return this.http.post('http://upload-z0.qiniu.com', formData, {headers});
  }

  uploadAgreement(data: Agreement): Observable<ResponseResult> {
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    const url = `http://${environment.domain}/api/user/agreement`;
    return this.http.post(url, data, {headers}).pipe(map(res => res as ResponseResult));
  }

  uploadFile(data: any): Observable<ResponseResult> {
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    const url = `http://${environment.domain}/api/file/saveFile`;
    return this.http.post(url, data, {headers}).pipe(map(res => res as ResponseResult));
  }

  getChildrens(): Observable<ResponseResult> {
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    const url = `http://${environment.domain}/api/user/children`;
    return this.http.get(url, {headers}).pipe(map(res => res as ResponseResult));
  }

  getParents(): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user/parents`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  /**
   * 获取协议
   * returns {Observable<ResponseResult>}
   */
  getUserAgreement(): Observable<ResponseResult> {
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    const url = `http://${environment.domain}/api/user/agreement`;
    return this.http.get(url, {headers}).pipe(map(res => res as ResponseResult));
  }

  applySchool(): Observable<ResponseResult> {
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    const url = `http://${environment.domain}/api/apply/school`;
    return this.http.post(url, null, {headers}).pipe(map(res => res as ResponseResult));
  }

  /**
   * 获取用户的评估信息
   * returns {Observable<ResponseResult>}
   */
  getAssessment(): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/user/assessment`;
    const token: string = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Token: token});
    return this.http.get(url, {headers}).pipe(map(res => res as ResponseResult));
  }

}
