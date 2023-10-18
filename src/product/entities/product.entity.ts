import { Entity } from 'typeorm';
import { Variant } from './variant.entity';

@Entity()
export class Product {
  productName: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  subCategory: string;
  introduction: string;
  technicalSpecifications: string[];
  imageUrl: string[];
  variants?: Variant[];
}
