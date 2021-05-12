/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'post' })
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column()
  @Field()
  author: string

  @Column()
  @Field()
  created_date: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  updated_date?: string

  @Column()
  @Field()
  title: string

  @Column()
  @Field()
  content: string

  @Column()
  @Field()
  category: string
}
