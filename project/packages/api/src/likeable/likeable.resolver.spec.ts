import { Test, TestingModule } from '@nestjs/testing'
import { LikeableResolver } from './likeable.resolver'

describe('LikeableResolver', () => {
  let resolver: LikeableResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikeableResolver],
    }).compile()

    resolver = module.get<LikeableResolver>(LikeableResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
