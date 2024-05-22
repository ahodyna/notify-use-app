import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../modules/users/user.entity';

const config = {
  type: 'postgres',
  port: 5432,
  username: 'obrio_app',
  password: 'obrio_app_password',
  database: 'user_service',
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts'],
  host: 'localhost',
  migrationsTableName: 'Migrations',
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
