import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
@InputType()
export class CreateMyInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
