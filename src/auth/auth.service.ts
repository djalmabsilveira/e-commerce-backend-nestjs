import { Injectable } from '@nestjs/common';
import { Admin, Customer } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CustomerService } from 'src/customer/customer.service';
import { UnauthorizedError } from 'src/shared/errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private jwtService: JwtService,
  ) {}

  customerLogin(customer: Customer): UserToken {
    const payload: UserPayload = {
      sub: customer.id,
      email: customer.email,
      name: customer.customerName,
    };

    const authToken = this.jwtService.sign(payload);

    return {
      access_token: authToken,
    };
  }

  async validateCustomer(
    email: string,
    password: string,
  ): Promise<Admin | Customer> {
    const customer = await this.customerService.findByEmail(email);
    return await this.validate(customer, password);
  }

  async validateAdmin(email: string, password: string) {}

  private async validate(
    user: Customer | Admin,
    password: string,
  ): Promise<Admin | Customer> {
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new UnauthorizedError('Invalid email and/or password provided.');
  }
}
