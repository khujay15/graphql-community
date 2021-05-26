import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CommentService } from './comment.service'
import { Comment } from './model/comment.entity'
import { CreateCommentInput, GetCommentInput } from './dto/comment.input'

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query((returns) => [Comment])
  getAllComments(): Promise<Comment[]> {
    return this.commentService.findAll()
  }

  @Query((returns) => [Comment])
  getSomeComments(@Args('input') input: GetCommentInput): Promise<Comment[]> {
    return this.commentService.findSome(input)
  }

  @Query((returns) => Comment)
  getComment(@Args('id') id: number): Promise<Comment> {
    return this.commentService.findOne(id)
  }

  @Mutation(() => Comment, { name: 'createComment' })
  createComment(@Args('input') input: CreateCommentInput): Promise<Comment> {
    return this.commentService.createOne(input)
  }
}
