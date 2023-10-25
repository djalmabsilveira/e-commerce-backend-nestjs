import { Entity } from 'typeorm';
import { Variant } from './variant.entity';
import { TechnicalSpecification } from './technical-specifications.entity';

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
  technicalSpecifications: TechnicalSpecification[];
  imageUrl: string[];
  variants?: Variant[];
}
