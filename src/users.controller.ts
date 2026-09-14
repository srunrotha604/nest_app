import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { HttpExceptionFilter } from './http-exception.filter.js';
import { UsersService } from './users.service.js';
@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private userservice: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userservice.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userservice.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userservice.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userservice.remove(id);
  }
}
