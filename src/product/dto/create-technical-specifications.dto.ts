import { IsString } from 'class-validator';

export class CreateTechnicalSpecificationDto {
  @IsString()
  specKey: string;

  @IsString()
  specDescription: string;
}
