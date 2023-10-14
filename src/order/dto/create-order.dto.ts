import { IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  readonly customerId: number;
}