import { Field, InputType, PickType } from '@nestjs/graphql'
import { Likeable } from '../model/likeable.entity'

@InputType()
export class GetLikeableInput {
  @Field({ nullable: true })
  likeable_id?: number

  @Field({ nullable: true })
  user_id?: string

  @Field()
  likeable_type: string
}

@InputType()
export class CreateLikeableInput extends PickType(
  Likeable,
  ['likeable_id', 'like_dislike', 'likeable_type'],
  InputType,
) {}
