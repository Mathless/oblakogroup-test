import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TaskEntity } from './task.entity';

@ObjectType({ description: 'Категория задач' })
@Entity()
export class CategoryEntity {
  // region Plain

  @Field(() => String, { description: 'id' })
  @PrimaryColumn('uuid')
  id: string;

  @Field(() => String, { description: 'title' })
  @Column('varchar', { nullable: false })
  title: string;

  // endregion

  // region relation

  /** Таски этой категории */
  @Field(() => [TaskEntity], {
    nullable: true,
    description: 'Таски этой категории',
  })
  @OneToMany(() => TaskEntity, (task) => task.category)
  todos: TaskEntity[];

  // endregion
}
