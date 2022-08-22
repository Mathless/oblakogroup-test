import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@ObjectType({ description: 'Task entity' })
@Entity()
export class TaskEntity {
  // region Plain

  @Field(() => ID, { description: 'id' })
  @PrimaryColumn('uuid')
  id: string;

  @Field(() => String, { description: 'text' })
  @Column('varchar', { nullable: false })
  text: string;

  @Field(() => Boolean, { description: 'completed or not' })
  @Column('boolean', { default: false })
  isCompleted: boolean;

  // endregion

  // region relation

  /** Category */
  @Field(() => CategoryEntity, { nullable: false, description: 'Category' })
  @ManyToOne(() => CategoryEntity, (category) => category.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  category: CategoryEntity;

  /** Category id */
  @Field(() => ID, { nullable: false, description: 'Category id' })
  @Column('uuid', { nullable: false })
  categoryId: string;

  // endregion
}
