import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field(() => String, { description: 'categoryName' })
  categoryName: string;
  @Field(() => String, { description: 'text' })
  text: string;
}
