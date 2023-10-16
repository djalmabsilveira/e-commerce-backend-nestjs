import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/shared/dto/create-address.dto';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;

  @IsString()
  customerName: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
