import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'title' })
  title: string;
}
