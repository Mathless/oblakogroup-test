import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { v4 as uuid } from 'uuid';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryEntityRepository: Repository<CategoryEntity>,
    @InjectRepository(TaskEntity)
    private taskEntityRepository: Repository<TaskEntity>,
  ) {}

  create(createCategoryInput: CreateCategoryInput) {
    const category = new CategoryEntity();
    category.title = createCategoryInput.title;
    category.id = uuid();
    return this.categoryEntityRepository.save(category);
  }

  async findAll() {
    return await this.categoryEntityRepository.find({ relations: ['todos'] });
  }

  async createTask(createTaskInput: CreateTaskInput) {
    let category = await this.categoryEntityRepository.findOne({
      where: { title: createTaskInput.categoryName },
    });
    if (category == undefined) {
      category = new CategoryEntity();
      category.title = createTaskInput.categoryName;
      category.id = uuid();
      await this.categoryEntityRepository.save(category);
    }
    const task = new TaskEntity();
    task.text = createTaskInput.text;
    task.id = uuid();
    task.categoryId = category.id;
    task.category = category;
    await this.taskEntityRepository.save(task);
    return task;
  }

  async updateTask(updateTaskInput: UpdateTaskInput) {
    const task = await this.taskEntityRepository.findOne({
      where: { id: updateTaskInput.id },
    });
    task.text = updateTaskInput.text ?? task.text;
    task.isCompleted = updateTaskInput.isCompleted ?? task.isCompleted;
    await this.taskEntityRepository.save(task);
    return task;
  }
}
