import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { JwtPayload } from './interfaces/jwtPayload.interface';
import { LoginStatus } from './interfaces/loginStatus.interface';
import { toUserDto } from 'src/user/dto/to-user.dto';
import { ConnectableObservable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.userService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return toUserDto(user);
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    const user = await this.userService.findByLogin(loginUserDto);
    if (!user) {
      alert('invalid cridentials');
    }
    const token = this._createToken(user);
    const status = {
      username: user.username,
      role: user.role,
      ...token,
    };
    return status;
  }
  private _createToken({ username }: UserDto): any {
    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: '3h',
      accessToken,
    };
  }

  async register(userDto: CreateUserDto) {
    try {
      const user = await this.userService.create(userDto);
      return user;
    } catch (err) {
      throw new Error();
    }
  }
}
