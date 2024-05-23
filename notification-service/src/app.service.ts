import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handlerNotification(data: any) {
    console.log('Received data:', data);
  }
}
