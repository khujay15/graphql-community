import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MypageService } from './mypage.service';
import { MyPage } from './mypage.entity';
import { CreateMyInput } from './dto/create-mypage.input';

@Resolver((of) => MyPage)
export class MypageResolver {
  constructor(private myPageService: MypageService) {}

  @Query((returns) => [MyPage])
  myPage(): Promise<MyPage[]> {
    return this.myPageService.findAll();
  }

  @Mutation((returns) => MyPage)
  createMyPage(
    @Args('createMyInput') createMyPage: CreateMyInput,
  ): Promise<MyPage> {
    return this.myPageService.createMy(createMyPage);
  }
}
