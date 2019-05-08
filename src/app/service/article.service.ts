import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseResult} from '../model/response';
import {Page} from '../model/page';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getPageArticles(page: Page): Observable<ResponseResult> {
    const url = `http://localhost:8080/api/article/articles?page=${page.page}&pageCount=${page.pageCount}`;
    return this.http.get(url).pipe(map(res => {
      return res as ResponseResult;
    }));
  }
}
