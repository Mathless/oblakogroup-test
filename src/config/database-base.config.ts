import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

export const baseConfig: ConnectionOptions = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  synchronize: false,
  migrationsRun: false,
  namingStrategy: new SnakeNamingStrategy(),
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
};
