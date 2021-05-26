/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'likeable' })
@ObjectType()
export class Likeable {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column()
  @Field()
  user_id: string

  @Column()
  @Field((type) => Int)
  likeable_id: number

  @Column()
  @Field((type) => Int)
  like_dislike: number

  @Column()
  @Field()
  created_date: string

  @Column()
  @Field()
  likeable_type: string
}
