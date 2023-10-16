import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin, Customer } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { AdminService } from 'src/admin/admin.service';
import { CustomerService } from 'src/customer/customer.service';
import { UnauthorizedError } from 'src/shared/errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
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

  adminLogin(admin: Admin): UserToken {
    const payload: UserPayload = {
      sub: admin.id,
      email: admin.email,
      name: admin.adminName,
    };

    const authToken = this.jwtService.sign(payload);

    return {
      access_token: authToken,
    };
  }

  async validateCustomer(email: string, password: string): Promise<Customer> {
    const customer = await this.customerService.findByEmail(email);
    const validatedCustomer = await this.validate(customer, password);

    if (!('customerName' in validatedCustomer)) {
      throw new Error('User is not a customer');
    }

    return validatedCustomer;
  }

  async validateAdmin(email: string, password: string): Promise<Admin> {
    const admin = await this.adminService.findByEmail(email);
    const validatedAdmin = await this.validate(admin, password);

    if (!('adminName' in validatedAdmin)) {
      throw new Error('User is not an admin');
    }

    return validatedAdmin;
  }

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
