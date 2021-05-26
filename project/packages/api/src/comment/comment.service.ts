import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { QueryRunner, Repository, getConnection } from 'typeorm'
import { Comment } from './model/comment.entity'
import { getCurrentDate } from '../shared/utils'
import { CreateCommentInput, GetCommentInput } from './dto/comment.input'
import { MASTER_TEST } from 'src/shared/const'

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}
  private connection = getConnection()

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find()
  }

  async findOne(id: number): Promise<Comment> {
    return this.commentRepository.findOne(id)
  }

  async findSome(input: Partial<GetCommentInput>): Promise<Comment[]> {
    return this.commentRepository
      .createQueryBuilder('comment')
      .where('comment.post_id = :post_id', { post_id: input.post_id })
      .orWhere('comment.author = :author', { author: input.author })
      .orWhere('comment.parent = :parent', { parent: input.parent })
      .getMany()
  }

  async createOne(input: CreateCommentInput): Promise<Comment> {
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
        this.commentRepository.create(newInput),
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
