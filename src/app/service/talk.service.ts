import { Injectable } from '@angular/core';
import {Subject, Observer, Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  ws: WebSocket;
  constructor() { }

  // private subject: Rx.Subject<MessageEvent>;
  // messages: Subject<any>;
  //
  // public open(userId: number) {
  //   const chatUrl = `ws://localhost:8080//conversation/${userId}`;
  //   this.messages = this
  //     .connect(chatUrl)
  //     .pipe(map((response: MessageEvent): any => {
  //       const data = JSON.parse(response.data);
  //       return data;
  //     }));
  // }
  //
  // public connect(url): Subject<MessageEvent> {
  //   if (!this.subject) {
  //     this.subject = this.create(url);
  //     console.log('Successfully connected: ' + url);
  //   }
  //   return this.subject;
  // }
  //
  // private create(url): Subject<MessageEvent> {
  //   const ws = new WebSocket(url);
  //   const observable = Observable.create(
  //     (obs: Observer<MessageEvent>) => {
  //       ws.onmessage = obs.next.bind(obs);
  //       ws.onerror = obs.error.bind(obs);
  //       ws.onclose = obs.complete.bind(obs);
  //       return ws.close.bind(ws);
  //     });
  //   const observer = {
  //     next: (data: any) => {
  //       if (ws.readyState === WebSocket.OPEN) {
  //         ws.send(JSON.stringify(data));
  //       }
  //     }
  //   }
  //   return Subject.create(observer, observable);
  // }
  connectWs(userId: number): Observable<MessageEvent> {
    const chatUrl = `ws://134.175.137.51:8080/conversation/${userId}`;
    this.ws = new WebSocket(chatUrl);
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      });
  }

  send(message: string): void {
    this.ws.send(message);
  }

  close(): void {
    console.log('close关闭聊天');
    this.ws.close();
  }
}
