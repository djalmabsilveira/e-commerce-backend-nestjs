import { Order } from 'src/order/entities/order.entity';
import { Address } from 'src/shared/entities/address.entity';
import { Entity } from 'typeorm';

@Entity()
export class Customer {
  id: string;
  customerName: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: Order[];
  addresses?: Address[];
}
