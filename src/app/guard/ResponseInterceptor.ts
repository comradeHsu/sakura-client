import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(mergeMap(event => {
        if (event instanceof HttpResponse && event.status === 200) {
          return this.handleData(event);
        }
        return of(event);
      }),
      catchError((err => this.handleData(err))));
  }

  private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    switch (event.status) {
      case 200:
        if (event instanceof HttpResponse) {
          const body: any = event.body;
          if (body.code === 403) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            this.router.navigate(['/index']).then(res => console.log(res));
          }
        }
        break;
      case 404:
      case 500:
        const error = event as HttpErrorResponse;
        console.log(error.message);
        break;
      default:
        return of(event);
    }
    return of(event);
  }
}
