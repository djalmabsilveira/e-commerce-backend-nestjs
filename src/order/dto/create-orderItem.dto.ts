import { IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNumber()
  readonly orderId: number;

  @IsNumber()
  readonly productId: number;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  readonly price: number;
}