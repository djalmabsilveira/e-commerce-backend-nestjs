import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthRequest } from './models/UserAuthRequest';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { IsPublic } from 'src/shared/decorators/is-public.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @IsPublic()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: UserAuthRequest) {
    return this.authService.login(req.user);
  }
}
