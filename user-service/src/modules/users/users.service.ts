import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository, In } from 'typeorm';

import { Users } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { id } = await this.usersRepository.save(createUserDto);

    return id;
  }

  async getUnnotifiedUsers(): Promise<Users[]> {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    return await this.usersRepository.find({
      where: {
        is_notified: false,
        created_at: MoreThan(twentyFourHoursAgo),
      },
      select: {
        id: true,
        email: true,
      },
    });
  }

  async updateUserNotificationStatus(userIds: number[]) {
    if (!userIds || !userIds.length) return;
    try {
      const usersToUpdate = await this.usersRepository.find({
        where: { id: In(userIds) },
      });

      await Promise.all(
        usersToUpdate.map(async (user) => {
          user.is_notified = true;
          await this.usersRepository.save(user);
        }),
      );
    } catch (error) {
      throw new Error(`Failed to mark users as notified: ${error.message}`);
    }
  }
}
