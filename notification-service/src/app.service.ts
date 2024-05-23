import { Injectable } from '@nestjs/common';
import { CommunicatorService } from './modules/communicator/communicator.service';

@Injectable()
export class AppService {
  constructor(private readonly communicatorService: CommunicatorService) {}
  async handlerNotification(data: any) {
    try {
      const response = await this.communicatorService.sendData(data);
      return response;
    } catch (error) {
      return { message: 'Error sending data', error };
    }
  }
}
