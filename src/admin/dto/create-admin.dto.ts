import { IsString, IsEmail } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  readonly adminName: string;

  @IsString()
  readonly password: string;

  @IsEmail()
  readonly email: string;
}