import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AdminAuthGuard } from 'src/guards/admin-auth.guard';
import { CustomerAuthGuard } from 'src/guards/customer-auth.guard';
import { AuthService } from './auth.service';
import { AdminAuthRequest } from './models/AdminAuthRequest';
import { CustomerAuthRequest } from './models/CustomerAuthRequest';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/customer/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(CustomerAuthGuard)
  async customerLogin(@Request() req: CustomerAuthRequest) {
    return this.authService.customerLogin(req.user);
  }

  @Post('/admin/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AdminAuthGuard)
  async adminLogin(@Request() req: AdminAuthRequest) {
    return this.authService.adminLogin(req.user);
  }
}
