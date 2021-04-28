import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  find(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(input: UserInput): Promise<User> {
    return this.usersRepository.create(input);
  }

  async update(input: UserInput): Promise<User> {
    const user = await User.findOneOrFail(input?.id);
    Object.assign(user, input);
    return await user.save();
  }
}
