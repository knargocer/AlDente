import { PartialType } from '@nestjs/mapped-types';
import { Role } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  username: string;
  email: string;
  address: string;
  telephone: number;
  role: Role;
}
