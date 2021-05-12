import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { QueryRunner, Repository, getConnection } from 'typeorm'
import {
  CreatePostInput,
  GetPostInput,
  UpdatePostInput,
} from './dto/post.input'
import { Post } from './model/post.entity'

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
      .where('post.author like :author', { author: input.author })
      .getMany()
  }

  async createOne(input: CreatePostInput): Promise<Post> {
    let result
    const queryRunner: QueryRunner = this.connection.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
      result = await queryRunner.manager.save(this.postRepository.create(input))
      await queryRunner.commitTransaction()
    } catch (err) {
      await queryRunner.rollbackTransaction()
      throw err
    } finally {
      await queryRunner.release()
    }

    return result
  }

  async updateOne(input: UpdatePostInput): Promise<Post> {
    let result
    const queryRunner: QueryRunner = this.connection.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
      const before = await this.postRepository.findOne(input.id)

      result = await queryRunner.manager.save(this.postRepository.create(input))
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
