import { Admin } from 'src/admin/entities/admin.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Entity } from 'typeorm';

@Entity()
export class Address {
  id: number;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
  customer: Customer;
  admin: Admin;
}
