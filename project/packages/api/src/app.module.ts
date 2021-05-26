import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MypageModule } from './mypage/mypage.module'
import { PostModule } from './post/post.module'
import { CommentModule } from './comment/comment.module'
import { UserModule } from './user/user.module'
import { LikeableModule } from './likeable/likeable.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: false,
    }),
    MypageModule,
    PostModule,
    CommentModule,
    UserModule,
    LikeableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
