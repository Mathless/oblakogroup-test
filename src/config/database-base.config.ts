import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';

dotenv.config();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

export const baseConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  synchronize: false,
  migrationsRun: false,
  namingStrategy: new SnakeNamingStrategy(),
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
};
