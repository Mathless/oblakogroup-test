import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { TaskEntity } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, TaskEntity])],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
