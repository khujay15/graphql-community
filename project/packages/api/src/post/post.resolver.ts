import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostService } from './post.service'
import { Post } from './model/post.entity'
import { GetPostInput } from './dto/post.input'

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query((returns) => [Post])
  getPosts(): Promise<Post[]> {
    return this.postService.findAll()
  }

  @Query((returns) => Post)
  getPost(@Args('id') id: number): Promise<Post> {
    return this.postService.findOne(id)
  }
}
