import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthMiddleware } from './auth.middleware.js';
import { CatsModule } from './cats.module.js';
import { User } from './entities/user.entity.js';
import { LoggerMiddleware } from './logger.middleware.js';
import { UserHttpModule } from './users-http.module.js';
const isDevelopment = process.env.NODE_ENV === 'development';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'nest_user',
      password: 'NestApp2026@#$',
      database: 'nest_db',
      entities: [User],
      synchronize: isDevelopment ? true : false,
    }),
    ConfigModule.forRoot({}),
    CatsModule,
    UserHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes('cats');
  }
}
