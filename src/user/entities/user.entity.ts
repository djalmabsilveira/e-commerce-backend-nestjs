import { Order } from 'src/order/entities/order.entity';
import { Address } from 'src/shared/entities/address.entity';
import { Entity } from 'typeorm';

@Entity()
export class User {
  id: string;
  name: string;
  password: string;
  email: string;
  accessLevel?: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: Order[];
  addresses?: Address[];
}
