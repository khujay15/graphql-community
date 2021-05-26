/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'comment' })
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column()
  @Field()
  author: string

  @Column()
  @Field((type) => Int)
  post_id: number

  @Column()
  @Field((type) => Int)
  parent: number

  @Column()
  @Field()
  content: string

  @Column()
  @Field()
  created_date: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  updated_date?: string
}
