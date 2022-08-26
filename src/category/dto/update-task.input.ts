import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => String, { nullable: false })
  id: string;
  @Field(() => String, { description: 'text' })
  text: string;
  @Field(() => Boolean, { description: 'Done or not' })
  isCompleted: boolean;
}
