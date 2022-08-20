import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'title' })
  title: string;
}
