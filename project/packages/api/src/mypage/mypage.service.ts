import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMyInput } from './dto/create-mypage.input';
import { MyPage } from './mypage.entity';

@Injectable()
export class MypageService {
  constructor(
    @InjectRepository(MyPage) private myPageRepository: Repository<MyPage>,
  ) {}

  async createMy(createMyInput: CreateMyInput): Promise<MyPage> {
    const newPage = this.myPageRepository.create(createMyInput);

    return this.myPageRepository.save(newPage);
  }

  async findAll(): Promise<MyPage[]> {
    return this.myPageRepository.find();
  }
}
