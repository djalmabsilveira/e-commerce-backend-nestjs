import { IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNumber()
  readonly orderId: string;

  @IsNumber()
  readonly productId: string;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  readonly price: number;
}