import { Module } from '@nestjs/common';
import { MypageService } from './mypage.service';
import { MypageResolver } from './mypage.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyPage } from './mypage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MyPage])],
  providers: [MypageService, MypageResolver],
})
export class MypageModule {}
