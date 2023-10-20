import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateVariantDto } from './create-variant.dto';
import { CreateImageDto } from 'src/shared/dto/create-image.dto';

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

  @IsString()
  introduction: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateImageDto)
  images: CreateImageDto[];

  @ValidateNested()
  @Type(() => CreateVariantDto)
  variants: CreateVariantDto[];

  @IsArray()
  @IsString({ each: true })
  technicalSpecifications: string[];
}
