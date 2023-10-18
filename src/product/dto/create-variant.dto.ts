import { IsArray, IsString } from 'class-validator';

export class CreateVariantDto {
  @IsString()
  color: string;

  @IsArray()
  @IsString({ each: true })
  imageUrl: string[];
}
