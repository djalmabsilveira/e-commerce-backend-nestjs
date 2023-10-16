import { Request } from 'express';
import { Customer } from 'src/customer/entities/customer.entity';

export interface CustomerAuthRequest extends Request {
  user: Customer;
}
