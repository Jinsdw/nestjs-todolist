import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];
  /** 创建数据 */
  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
  }
  /** 获取数据 */
  findAll(): CreateCatDto[] {
    return this.cats;
  }
  /** 获取id数据 */
  findOne(id: string): CreateCatDto {
    return this.cats.find(cat => cat.id === id) || {};
  }
}

