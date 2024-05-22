import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UsersService } from '../users/users.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly usersService: UsersService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    this.logger.debug('Called every 30 seconds');

    const users = await this.usersService.getUnnotifiedUsers();
    if (users.length) {
      this.logger.log(`Users to notify:  ${JSON.stringify(users)}`);
      // TODO: send to RabbitMQ

      const userIds = users.map((user) => user.id);
      await this.usersService.updatedUserNotificationStatus(userIds);
    }
  }
}
