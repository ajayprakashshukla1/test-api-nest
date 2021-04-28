import {
  Controller,
  Get,
  Response,
  HttpStatus,
  Param,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { UserInput } from './user.input';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('user')
  public async getUsers(@Response() response) {
    const users = await this.userService.find();
    return response.status(HttpStatus.OK).json(users);
  }

  @Get('user/:id')
  public async getUser(@Param('id') id, @Response() response) {
    const user = await this.userService.findOne(id);
    return response.status(HttpStatus.OK).json(user);
  }

  @Post('user')
  public async createUser(@Response() response, @Body() input: UserInput) {
    const user = await this.userService.create(input);
    return response.status(HttpStatus.CREATED).json(user);
  }

  @Put('user')
  public async updateUser(@Response() response, @Body() input: UserInput) {
    const user = await this.userService.update(input);
    return response.status(HttpStatus.OK).json(user);
  }
}
