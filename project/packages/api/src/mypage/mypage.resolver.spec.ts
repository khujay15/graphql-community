import { Test, TestingModule } from '@nestjs/testing';
import { MypageResolver } from './mypage.resolver';

describe('MypageResolver', () => {
  let resolver: MypageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MypageResolver],
    }).compile();

    resolver = module.get<MypageResolver>(MypageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
