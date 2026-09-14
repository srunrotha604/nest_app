import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersModule } from './users.module.js';
import { UsersService } from './users.service.js';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UserHttpModule {}
