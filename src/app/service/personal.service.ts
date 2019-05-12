import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {ResponseResult} from '../model/response';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  getToken(): Observable<ResponseResult> {
    const url = `http://${environment.domain}/qiniu/token`;
    return this.http.get(url).pipe(map(res => res as ResponseResult));
  }
}
