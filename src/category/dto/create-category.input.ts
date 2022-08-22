import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, { description: 'title' })
  title: string;
}
