import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Resolver(() => CategoryEntity)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => CategoryEntity)
  async createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return await this.categoryService.create(createCategoryInput);
  }

  @Mutation(() => TaskEntity, { name: 'createTodo' })
  async createTask(@Args('input') createTaskInput: CreateTaskInput) {
    // console.log(await this.categoryService.createTask(createTaskInput));
    return await this.categoryService.createTask(createTaskInput);
  }

  @Mutation(() => TaskEntity, { name: 'updateTodo' })
  async updateTask(@Args('input') updateTaskInput: UpdateTaskInput) {
    // console.log(await this.categoryService.createTask(createTaskInput));
    return await this.categoryService.updateTask(updateTaskInput);
  }

  @Query(() => [CategoryEntity], { name: 'categories' })
  async findAll() {
    return await this.categoryService.findAll();
  }
}
