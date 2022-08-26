import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field(() => String, { description: 'categoryName', nullable: false })
  categoryName: string;
  @Field(() => String, { description: 'text', nullable: false })
  text: string;
}
