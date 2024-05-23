import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MessageService {
  constructor(@Inject('USER_NOTIFICATION') private rabbitClient: ClientProxy) {}

  send(users: any) {
    const mappedMessage = users.map((user: any) => {
      return { text: 'Hello', userId: user.id, email: user.email };
    });
    this.rabbitClient.emit('user-notification', mappedMessage);

    return { message: 'Users notified' };
  }
}
