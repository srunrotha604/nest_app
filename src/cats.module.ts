import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller.js';
import { CatService } from './cats.service.js';

@Module({
  controllers: [CatsController],
  providers: [CatsModule, CatService],
  exports: [CatService],
})
export class CatsModule {
  constructor(private catsService: CatService) {}
}
