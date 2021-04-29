import { Field, InputType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@InputType()
export class GetPostInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  category?: string;
}
