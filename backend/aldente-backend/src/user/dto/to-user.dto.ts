import { UserDto } from './user.dto';
import { User } from '../entities/user.entity';

export const toUserDto = (data: User): UserDto => {
  const { id, username, email, password, role } = data;
  const userDto: UserDto = { id, username, email, password, role };
  return userDto;
};
