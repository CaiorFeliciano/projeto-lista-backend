import { Controller, Get } from '@nestjs/common';
import { UserService } from './usecases/get.users.usecase';
import { User } from './user.entity';

@Controller('alunos')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
