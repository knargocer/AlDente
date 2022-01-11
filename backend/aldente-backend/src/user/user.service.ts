import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { toUserDto } from './dto/to-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const {
      user_id,
      name,
      surname,
      username,
      email,
      address,
      telephone,
      password,
      role,
    } = createUserDto;
    const newUser = new this.UserModel({
      user_id,
      name,
      surname,
      username,
      email,
      address,
      telephone,
      password,
      role,
    });
    const user = await newUser.save();
    return toUserDto(user);
  }

  async findByPayload(username) {
    const user = await this.findOneByUsername(username);
    return user;
  }

  async findAll() {
    const users = await this.UserModel.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.findOne(id);
    return user;
  }

  async findOneByUsername(username: string) {
    const users = await this.findAll();
    return users.find((user) => user.username === username);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { username, email, address, telephone } = updateUserDto;
    const updatedUser = await this.findOne(id);
    if (username) {
      updatedUser.username = username;
    }
    if (email) {
      updatedUser.email = email;
    }
    if (address) {
      updatedUser.address = address;
    }
    if (telephone) {
      updatedUser.telephone = telephone;
    }
    updatedUser.save();
  }

  async remove(id: number) {
    const result = await this.UserModel.deleteOne({ _id: id }).exec();
    if (!result) {
      throw new NotFoundException('There is no such a user');
    }
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const areEqual = await bcrypt.compareSync(password, user.password);
    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return toUserDto(user);
  }
}
