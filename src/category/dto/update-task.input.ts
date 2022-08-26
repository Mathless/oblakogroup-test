import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateTaskInput } from './create-task.input';

@InputType()
export class UpdateTaskInput {
  @Field(() => String)
  id: string;
  @Field(() => String, { description: 'text', nullable: false })
  text: string;
}
