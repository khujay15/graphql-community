import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { QueryRunner, Repository, getConnection } from 'typeorm'
import {
  CreatePostInput,
  GetPostInput,
  UpdatePostInput,
} from './dto/post.input'
import { Post } from './model/post.entity'
import { getCurrentDate } from '../shared/utils'
import { MASTER_TEST } from 'src/shared/const'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  private connection = getConnection()

  async findAll(): Promise<Post[]> {
    return this.postRepository.find()
  }

  async findOne(id: number): Promise<Post> {
    return this.postRepository.findOne(id)
  }

  async findSome(input: Partial<GetPostInput>): Promise<Post[]> {
    return this.postRepository
      .createQueryBuilder('post')
      .where('post.id like :id', { id: input.id })
      .orWhere('post.author like :author', { author: input.author })
      .orWhere('post.category like :category', { category: input.category })
      .getMany()
  }

  async createOne(input: CreatePostInput): Promise<Post> {
    let result
    const queryRunner: QueryRunner = this.connection.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
      const newInput = {
        ...input,
        created_date: getCurrentDate(),
        author: MASTER_TEST,
      }
      result = await queryRunner.manager.save(
        this.postRepository.create(newInput),
      )
      await queryRunner.commitTransaction()
    } catch (err) {
      await queryRunner.rollbackTransaction()
      throw err
    } finally {
      await queryRunner.release()
    }

    return result
  }
}
