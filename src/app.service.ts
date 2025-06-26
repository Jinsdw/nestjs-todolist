import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /** hello */
  getHello(): string {
    return 'Hello World232323!';
  }
}

@Injectable()
export class TodoService {
  /** todolist列表 */
  getTodoList(): string {
    return '获取任务列表!';
  }
}
