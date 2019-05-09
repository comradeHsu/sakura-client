import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseResult} from '../model/response';
import {map} from 'rxjs/operators';
import {Request} from '../model/request';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }


  getParentRegion(): Observable<ResponseResult> {
    const url = `http://localhost:8080/region/parentRegions`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  getSubRegion(parentId: number | string): Observable<ResponseResult> {
    const url = `http://localhost:8080/region/parent/${parentId}`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  searchSchools(request: Request): Observable<ResponseResult> {
    const options = { params: new HttpParams().set('name', request.name).set('parentId', request.parentId)
      .set('subId', request.subId).set('rankingTop', request.rankingTop).set('rankingBottom', request.rankingBottom)
      .set('page', request.page).set('pageCount', request.pageCount)};
    console.log(options)
    const query = `name=${request.name}&parentId=${request.parentId}'&subId=${request.subId}
    &rankingTop=${request.rankingTop}&rankingBottom=${request.rankingBottom}&page=${request.page}
    &pageCount=${request.pageCount}`;
    const url = `http://localhost:8080/api/university/search?${query}`;
    return this.http.get(url, options).pipe(map(res => res as ResponseResult));
  }
}
