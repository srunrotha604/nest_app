import { Injectable } from '@nestjs/common';
import type { Cat } from './interfaces/cat.interface.js';
@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];
  create(catData: Cat) {
    this.cats.push(catData);
  }
  findAll(): Cat[] {
    return this.cats;
  }
}
