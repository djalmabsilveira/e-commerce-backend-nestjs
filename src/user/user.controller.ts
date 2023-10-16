import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { IsPublic } from 'src/shared/decorators/is-public.decorator';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post('/create')
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return await this.userService.create(createUserDto);
  }
}
