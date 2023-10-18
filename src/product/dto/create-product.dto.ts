import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateVariantDto } from './create-variant.dto';

export class CreateProductDto {
  @IsString()
  productName: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  discountPercentage: number;

  @IsNumber()
  @IsPositive()
  rating: number;

  @IsNumber()
  @IsPositive()
  stock: number;

  @IsString()
  brand: string;

  @IsString()
  category: string;

  @IsString()
  subCategory: string;

  @IsArray()
  @IsString({ each: true })
  imageUrl: string[];

  @ValidateNested()
  @Type(() => CreateVariantDto)
  variants: CreateVariantDto[];

  @IsString()
  introduction: string;

  @IsArray()
  @IsString({ each: true })
  technicalSpecifications: string[];
}
