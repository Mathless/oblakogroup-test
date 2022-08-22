import { ConnectionOptions } from 'typeorm';
import { baseConfig } from './database-base.config';
import { CategoryEntity } from '../category/entities/category.entity';
import { TaskEntity } from '../category/entities/task.entity';

export const config: ConnectionOptions = {
  ...baseConfig,
  entities: [CategoryEntity, TaskEntity],
};
