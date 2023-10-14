import { Customer } from 'src/customer/entities/customer.entity';
import { Entity } from 'typeorm';
import { OrderItem } from './orderItem.entity';

@Entity()
export class Order {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  customer: Customer;
  orderItems: OrderItem[];
}
