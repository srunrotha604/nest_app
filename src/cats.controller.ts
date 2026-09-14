import { Body, Controller, Post } from '@nestjs/common';
import { CatService } from './cats.service.js';
import { CreateCatDto } from './dto/CreateCatDto.js';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatService) {}
  @Post()
  async ceateCat(@Body() catCreateDto: CreateCatDto) {
    this.catsService.create(catCreateDto);
  }
}
