import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CustomerAuthGuard } from 'src/guards/customer-auth.guard';
import { AuthService } from './auth.service';
import { CustomerAuthRequest } from './models/CustomerAuthRequest';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(CustomerAuthGuard)
  async login(@Request() req: CustomerAuthRequest) {
    return this.authService.customerLogin(req.user);
  }
}
