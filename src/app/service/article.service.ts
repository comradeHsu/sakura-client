import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseResult} from '../model/response';
import {Page} from '../model/page';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getPageArticles(page: Page): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/article/articles?page=${page.page}&pageCount=${page.pageCount}`;
    return this.http.get(url).pipe(map(res => {
      return res as ResponseResult;
    }));
  }

  getArticle(id: number): Observable<ResponseResult> {
    const url = `http://${environment.domain}/api/article/${id}`;
    return this.http.get(url).pipe(map(res => {
      return res as ResponseResult;
    }));
  }
}
