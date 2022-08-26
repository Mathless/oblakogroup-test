import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => String, { nullable: false })
  id: string;
  @Field(() => String, { description: 'text', nullable: true })
  text: string;
  @Field(() => Boolean, { description: 'Done or not', nullable: true })
  isCompleted: boolean;
}
