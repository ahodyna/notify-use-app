import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  port: 5432,
  username: 'obrio_app',
  password: 'obrio_app_password',
  database: 'user_service',
  synchronize: false,
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*.js'],
  host: 'localhost',
  migrationsTableName: 'migrations',
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
