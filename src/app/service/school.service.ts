import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseResult} from '../model/response';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }


  getParentRegion(): Observable<ResponseResult> {
    const url = `http://localhost:8080/region/parentRegions`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }

  getSubRegion(parentId: number): Observable<ResponseResult> {
    const url = `http://localhost:8080/region/parent/${parentId}`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }
}
