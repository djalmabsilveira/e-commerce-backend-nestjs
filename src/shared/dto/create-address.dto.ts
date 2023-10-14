import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  readonly street: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly state: string;

  @IsString()
  readonly country: string;

  @IsString()
  readonly zipCode: string;
}
