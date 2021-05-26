import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateLikeableInput, GetLikeableInput } from './dto/likeable.input'
import { LikeableService } from './likeable.service'
import { Likeable } from './model/likeable.entity'

@Resolver((of) => Likeable)
export class LikeableResolver {
  constructor(private likeableService: LikeableService) {}

  @Query((returns) => [Likeable])
  getAllLikes(): Promise<Likeable[]> {
    return this.likeableService.findAll()
  }

  @Query((returns) => Number)
  getTotalLikes(@Args('input') input: GetLikeableInput): Promise<number> {
    return this.likeableService.findSome(input).then((res) => res.length)
  }

  @Query((returns) => Likeable)
  getLikeable(@Args('id') id: number): Promise<Likeable> {
    return this.likeableService.findOne(id)
  }

  @Mutation(() => Likeable, { name: 'createLikeable' })
  createLikeable(@Args('input') input: CreateLikeableInput): Promise<Likeable> {
    return this.likeableService.createOne(input)
  }
}
