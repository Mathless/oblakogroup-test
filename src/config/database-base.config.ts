import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

export const baseConfig: ConnectionOptions = {
  url: 'postgres://maibxgxcnextot:c9d7d8509e84626d017e0bc66c73e23f3c27a9d09793f0af679cda115d5d1e36@ec2-34-193-44-192.compute-1.amazonaws.com:5432/d57h7o3bq9c7ak',
  type: 'postgres',
  synchronize: false,
  migrationsRun: false,
  namingStrategy: new SnakeNamingStrategy(),
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
};
