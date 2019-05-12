export class Message {
  time: Date | string;
  content: string;
  type: number;

  public static buildMessage(data: string): Message {
    const message = new Message();
    message.content = data;
    message.time = new Date();
    message.type = 0;
    return message;
  }
}
