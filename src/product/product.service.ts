import { Injectable } from '@nestjs/common';
import { ImageUrl, Variant } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<string> {
    const { images, variants, ...productData } = createProductDto;
    let createdVariants: Variant[] = [];
    let createdProductImages: ImageUrl[] = [];

    for (let variant of variants) {
      const variantImages = variant.images;
      let createdVariantImages: ImageUrl[] = [];

      // const createdVariantImages = await this.prisma.imageUrl.createMany({
      //   data: variantImages,
      // });

      for (let image of variantImages) {
        const tempImage = await this.prisma.imageUrl.create({
          data: image,
        });
        createdVariantImages.push(tempImage);
      }

      const tempVariant = await this.prisma.variant.create({
        data: {
          ...variant,
          images: {
            connect: createdVariantImages.map((image) => ({ id: image.id })),
          },
        },
      });
      createdVariants.push(tempVariant);
    }

    for (const image of images) {
      const tempImage = await this.prisma.imageUrl.create({
        data: image,
      });
      createdProductImages.push(tempImage);
    }

    await this.prisma.product.create({
      data: {
        ...productData,
        images: {
          connect: createdProductImages.map((image) => ({ id: image.id })),
        },
        variants: {
          connect: createdVariants.map((variant) => ({ id: variant.id })),
        },
      },
    });

    return 'Product created!';
  }
}
