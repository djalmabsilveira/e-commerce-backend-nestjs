import { Product } from 'src/product/entities/product.entity';
import { Entity } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  id: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  order: Order;
  product: Product;
}
