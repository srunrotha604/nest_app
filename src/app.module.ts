import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CatsController } from './cats.controller.js';
import { CatService } from './cats.service.js';
@Module({
  imports: [ConfigModule.forRoot({})],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule {}
