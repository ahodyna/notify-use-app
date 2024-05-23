import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { UsersModule } from '../users/users.module';
import { TasksService } from './cron.service';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [ScheduleModule.forRoot(), UsersModule, MessageModule],
  providers: [TasksService],
})
export class CronModule {}
