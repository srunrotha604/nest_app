import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthMiddleware } from './auth.middleware.js';
import { CatsModule } from './cats.module.js';
import { LoggerMiddleware } from './logger.middleware.js';
@Module({
  imports: [ConfigModule.forRoot({}), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes('cats');
  }
}
