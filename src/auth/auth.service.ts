import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CustomerService } from 'src/customer/customer.service';
import { UnauthorizedError } from 'src/shared/errors/unauthorized.error';

@Injectable()
export class AuthService {
  constructor(private customerService: CustomerService) {}

  login() {
    return 'teste';
  }

  async validateUser(email: string, password: string) {
    const customer = await this.customerService.findByEmail(email);

    if (customer) {
      const isPasswordValid = await bcrypt.compare(password, customer.password);
      if (isPasswordValid) {
        return {
          ...customer,
          password: undefined,
        };
      }
    }
    throw new UnauthorizedError(
      'Invalid email and/or password provided.',
    );
  }
}
