import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsInt({ message: 'Age must be a number' })
  age: number;
  @IsOptional()
  breed: string;
}
