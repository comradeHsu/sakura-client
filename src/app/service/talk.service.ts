import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  ws: WebSocket;
  constructor() { }

  connectWs(userId: number): Observable<MessageEvent> {
    const chatUrl = `ws://${environment.domain}/conversation/${userId}`;
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
