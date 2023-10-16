import { User } from 'src/user/entities/user.entity';
import { Entity } from 'typeorm';
import { OrderItem } from './orderItem.entity';

@Entity()
export class Order {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  orderItems: OrderItem[];
}
