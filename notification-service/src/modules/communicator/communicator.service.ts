import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CommunicatorService {
  constructor(private readonly httpService: HttpService) {}

  async sendData(data: any) {
    const url =
      'https://test-notification-service-2024-test.requestcatcher.com/';
    try {
      const response = await firstValueFrom(
        this.httpService.post(url, JSON.stringify(data)),
      );
      return { status: response.status, message: response.statusText };
    } catch (error) {
      console.error('Error sending data', error);
      throw error;
    }
  }
}
