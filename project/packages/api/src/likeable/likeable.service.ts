import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { QueryRunner, Repository, getConnection } from 'typeorm'
import { Likeable } from './model/likeable.entity'
import { getCurrentDate } from '../shared/utils'
import { GetLikeableInput, CreateLikeableInput } from './dto/likeable.input'
import { MASTER_TEST } from 'src/shared/const'

@Injectable()
export class LikeableService {
  constructor(
    @InjectRepository(Likeable)
    private likeableRepository: Repository<Likeable>,
  ) {}
  private connection = getConnection()

  async findAll(): Promise<Likeable[]> {
    return this.likeableRepository.find()
  }

  async findOne(id: number): Promise<Likeable> {
    return this.likeableRepository.findOne(id)
  }

  async findSome(input: Partial<GetLikeableInput>): Promise<Likeable[]> {
    return this.likeableRepository
      .createQueryBuilder('likeable')
      .where('likeable.user_id = :user_id', { user_id: input.user_id })
      .orWhere('likeable.likeable_id = :likeable_id', {
        likeable_id: input.likeable_id,
      })
      .andWhere('likeable.likeable_type = :likeable_type', {
        likeable_type: input.likeable_type,
      })
      .getMany()
  }

  async createOne(input: CreateLikeableInput): Promise<Likeable> {
    let result
    const queryRunner: QueryRunner = this.connection.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
      const newInput = {
        ...input,
        like_dislike: input.like_dislike > 0 ? 1 : -1,
        user_id: MASTER_TEST,
        created_date: getCurrentDate(),
      }
      result = await queryRunner.manager.save(
        this.likeableRepository.create(newInput),
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
