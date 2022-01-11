import { IsEnum, IsNotEmpty, IsEmail } from 'class-validator';
import { Role } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty() user_id: number;
  @IsNotEmpty() name: string;
  @IsNotEmpty() surname: string;
  @IsNotEmpty() username: string;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() address: string;
  @IsNotEmpty() telephone: number;
  @IsNotEmpty() password: string;
  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;
}
