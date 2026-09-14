import { IsEmail, IsNotEmpty, IsString,Is } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  Is
  age: number;
  breed: string;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
