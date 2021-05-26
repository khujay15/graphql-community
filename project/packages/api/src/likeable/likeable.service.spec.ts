import { Test, TestingModule } from '@nestjs/testing'
import { LikeableService } from './likeable.service'

describe('LikeableService', () => {
  let service: LikeableService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikeableService],
    }).compile()

    service = module.get<LikeableService>(LikeableService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
