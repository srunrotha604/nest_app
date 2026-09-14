import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CatService } from './cats.service.js';
import { CreateCatDto } from './dto/CreateCatDto.js';
import { HttpExceptionFilter } from './http-exception.filter.js';
@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatService) {}
  @Post()
  async ceateCat(@Body() catCreateDto: CreateCatDto) {
    // this.catsService.create(catCreateDto);

    throw new ForbiddenException();
  }
  @Get()
  async getAllCats() {
    this.catsService.findAll();
  }
}
