import { IsNotEmpty, IsEmail } from 'class-validator';
import { Role } from '../entities/user.entity';

export class UserDto {
  @IsNotEmpty() id: string;
  @IsNotEmpty() username: string;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() role: Role;
}
