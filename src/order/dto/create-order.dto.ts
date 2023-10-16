import { IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  readonly userId: string;
}