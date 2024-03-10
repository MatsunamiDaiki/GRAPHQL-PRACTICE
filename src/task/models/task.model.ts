import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: '';

  @Field({ nullable: true })
  description: string;
}
