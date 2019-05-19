import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {TalkService} from '../service/talk.service';
import {User} from '../model/user';
import {Message} from '../model/message';
import {StringUtils} from '../util/StringUtils';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Output() closeTalk = new EventEmitter();

  constructor(private service: TalkService,
              private el: ElementRef) { }
  userId: number;
  messages: Message[] = [];
  message: string;
  htmlClass: string[] = ['right', 'left'];
  spans: string[] = ['我', '樱之国客服'];
  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.userId = user.id;
    this.service.connectWs(this.userId).subscribe(
      event => {
        const message: Message = JSON.parse(event.data);
        message.time = new Date(message.time);
        this.messages.push(message);
        console.log(message);
      },
      err => console.log(err),
      () => console.log('断开websocket')
    );
  }

  close(): void {
    this.service.close();
    this.closeTalk.emit(false);
  }

  send(): void {
    if (StringUtils.isEmpty(this.message)) {
      return;
    }
    this.service.send(this.message);
    this.messages.push(Message.buildMessage(this.message));
    this.message = null;
    const ele = this.el.nativeElement.querySelector('.message');
    setTimeout(() => {ele.scrollTop = ele.scrollHeight - ele.clientHeight; }, 600);
  }
}
