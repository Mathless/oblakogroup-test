import { ConnectionOptions } from 'typeorm';
import { join } from 'path';
import { baseConfig } from './database-base.config';

const config: ConnectionOptions = {
  ...baseConfig,
  entities: [
    process.env.ENTITIES_PATH ||
      join(process.cwd(), 'src/category/entities/**/*.entity.ts'),
  ],
  migrations: [`migrations/*.ts`],
  cli: { migrationsDir: `migrations` },
  migrationsTransactionMode: 'each',
};

export = config;
