import { Body, Controller, Get, Header, HttpException, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<CreateCatDto[]> {
        try {
            return this.catsService.findAll()
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
}