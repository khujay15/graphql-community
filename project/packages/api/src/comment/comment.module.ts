import { Module } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CommentResolver } from './comment.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Comment } from './model/comment.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {}
