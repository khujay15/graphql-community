import { Module } from '@nestjs/common';
import { LikeableResolver } from './likeable.resolver';

@Module({
  providers: [LikeableResolver],
})
export class LikeableModule {}
