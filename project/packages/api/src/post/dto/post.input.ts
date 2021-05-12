import { Field, InputType, PartialType, PickType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { Post } from '../model/post.entity';

@InputType()
export class GetPostInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  category?: string;
}

@InputType()
export class CreatePostInput extends PickType(
  Post,
  ['category', 'content', 'title'],
  InputType,
) {}

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field()
  @IsNumber()
  id: number;
}
