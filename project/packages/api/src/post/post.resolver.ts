import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostService } from './post.service'
import { Post } from './model/post.entity'
import { CreatePostInput, GetPostInput } from './dto/post.input'

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query((returns) => [Post])
  getAllPosts(): Promise<Post[]> {
    return this.postService.findAll()
  }

  @Query((returns) => [Post])
  getSomePosts(@Args('input') input: GetPostInput): Promise<Post[]> {
    return this.postService.findSome(input)
  }

  @Query((returns) => Post)
  getPost(@Args('id') id: number): Promise<Post> {
    return this.postService.findOne(id)
  }

  @Mutation(() => Post, { name: 'createPost' })
  createPost(@Args('input') input: CreatePostInput): Promise<Post> {
    return this.postService.createOne(input)
  }
}
