import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateImageDto } from 'src/shared/dto/create-image.dto';

export class CreateVariantDto {
  @IsString()
  color: string;

  @ValidateNested()
  @Type(() => CreateImageDto)
  images: CreateImageDto[];
}
