import { Module } from '@nestjs/common'
import { LikeableResolver } from './likeable.resolver'
import { LikeableService } from './likeable.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Likeable } from './model/likeable.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Likeable])],
  providers: [LikeableService, LikeableResolver],
})
export class LikeableModule {}
