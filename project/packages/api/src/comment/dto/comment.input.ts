import { Field, InputType, PickType } from '@nestjs/graphql'
import { Comment } from '../model/comment.entity'

@InputType()
export class GetCommentInput {
  @Field({ nullable: true })
  post_id?: number

  @Field({ nullable: true })
  author?: string

  @Field({ nullable: true })
  parent?: string
}

@InputType()
export class CreateCommentInput extends PickType(
  Comment,
  ['post_id', 'content'],
  InputType,
) {
  @Field({ nullable: true })
  parent?: number
}
