import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MessageService } from './message.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_NOTIFICATION',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://user:password@localhost:5672'],
          queue: 'user-notification',
        },
      },
    ]),
  ],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
