import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';

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
    // TODO: change it after debugging to:
    //  const 24HoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const OneHoursAgo = new Date(Date.now() - 1 * 60 * 60 * 1000);

    // TODO: change it after debugging to: MoreThan
    return await this.usersRepository.find({
      where: {
        is_notified: false,
        created_at: LessThan(OneHoursAgo),
      },
      select: {
        id: true,
        email: true,
      },
    });
  }
}
