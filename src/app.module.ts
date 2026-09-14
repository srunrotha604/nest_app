import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthMiddleware } from './auth.middleware.js';
import { CatsModule } from './cats.module.js';
import { LoggerMiddleware } from './logger.middleware.js';
const isDevelopment = process.env.NODE_ENV === 'development';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest_user',
      password: 'NestApp2026@#$',
      database: 'nest_db',
      entities: [],
      synchronize: isDevelopment ? true : false,
    }),
    ConfigModule.forRoot({}),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes('cats');
  }
}
