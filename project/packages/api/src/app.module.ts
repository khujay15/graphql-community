import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as path from 'path'
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
      autoSchemaFile: path.join(
        __dirname,
        '../../shared/src/graphql/api/api.graphql',
      ),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.c1gc442imiw0.ap-northeast-2.rds.amazonaws.com',
      port: 5432,
      username: 'community',
      password: process.env.DB_PASSWORD,
      database: 'postgres',
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
