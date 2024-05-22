import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './cron/message-service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'obrio_app',
      password: 'obrio_app_password',
      database: 'user_service',
      synchronize: true,
      host: 'localhost',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
