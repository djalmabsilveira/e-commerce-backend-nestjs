import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

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
        technicalSpecifications: { create: technicalSpecifications },
        variants: {
          create: variants.map((variant) => ({
            ...variant,
            images: { create: variant.images },
          })),
        },
      },
    });

    return 'Product created!';
  }

  async getById(id: string): Promise<Product> {
    return await this.prisma.product.findUnique({
      where: { id },
      include: {
        technicalSpecifications: {
          select: {
            specKey: true,
            specDescription: true,
          },
        },
        images: {
          select: {
            url: true,
          },
        },
        variants: {
          select: {
            color: true,
            images: {
              select: {
                url: true,
              },
            },
          },
        },
      },
    });
  }
}
