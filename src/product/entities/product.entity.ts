import { OrderItem } from 'src/order/entities/orderItem.entity';
import { Entity } from 'typeorm';

@Entity()
export class Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  orderItems: OrderItem[];
}