import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseResult} from '../model/response';
import {map} from 'rxjs/operators';
import {MajorRequest, Request} from '../model/request';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }


  getParentRegion(): Observable<ResponseResult> {
    const url = `http://${environment.domain}/region/parentRegions`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  getSubRegion(parentId: number | string): Observable<ResponseResult> {
    const url = `http://${environment.domain}/region/parent/${parentId}`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  searchSchools(request: Request): Observable<ResponseResult> {
    const options = { params: new HttpParams().set('name', request.name).set('parentId', request.parentId as string)
        .set('subId', request.subId as string).set('rankingTop', request.rankingTop as string)
        .set('rankingBottom', request.rankingBottom as string).set('page', request.page as string)
        .set('pageCount', request.pageCount as string)};
    const url = `http://${environment.domain}/api/university/search`;
    return this.http.get(url, options).pipe(map(res => res as ResponseResult));
  }

  getSchool(id: number): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/university/${id}`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  getPageMajors(request: MajorRequest, id: number): Observable<ResponseResult> {
    const options = { params: new HttpParams().set('majorName', request.majorName).set('degreeType', request.degreeType)
    .set('page', request.page as string).set('pageCount', request.pageCount as string)};
    const url = `http://${environment.domain}/api/university/${id}/majors`;
    return this.http.get(url, options).pipe(map(res => res as ResponseResult));
  }
}
