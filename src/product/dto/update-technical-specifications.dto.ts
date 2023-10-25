import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalSpecificationDto } from './create-technical-specifications.dto';

export class UpdateTechnicalSpecificationDto extends PartialType(
  CreateTechnicalSpecificationDto,
) {}
