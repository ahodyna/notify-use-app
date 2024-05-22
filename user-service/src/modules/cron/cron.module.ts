import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { UsersModule } from '../users/users.module';
import { TasksService } from './cron.service';

@Module({
  imports: [ScheduleModule.forRoot(), UsersModule],
  providers: [TasksService],
})
export class CronModule {}
