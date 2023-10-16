import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly productName: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly stock: number;
}