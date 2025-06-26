import { Controller, Get } from '@nestjs/common';
import { AppService, TodoService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }
  @Get()
  getTodoListApi(): string {
    return this.todoService.getTodoList();
  }
}
