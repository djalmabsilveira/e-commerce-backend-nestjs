import { Injectable } from '@nestjs/common';
import { ImageUrl, TechnicalSpecification, Variant } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateVariantDto } from './dto/create-variant.dto';
import { CreateImageDto } from 'src/shared/dto/create-image.dto';
import { CreateTechnicalSpecificationDto } from './dto/create-technical-specifications.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<string> {
    const { technicalSpecifications, images, variants, ...productData } =
      createProductDto;

    await this.prisma.product.create({
      data: {
        ...productData,
        images: { create: images },
        variants: {
          create: variants.map((variant) => ({
            ...variant,
            images: { create: variant.images },
          })),
        },
        technicalSpecifications: { create: technicalSpecifications },
      },
    });

    return 'Product created!';
  }
}
