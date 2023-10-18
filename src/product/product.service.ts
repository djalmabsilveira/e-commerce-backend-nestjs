import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Variant } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const { variants, ...productData } = createProductDto;

    let createdVariants: Variant[] = [];
    for (let variant of variants) {
      const tempVariant = await this.prisma.variant.create({
        data: variant,
      });
      createdVariants.push(tempVariant);
    }

    console.log(createdVariants);

    await this.prisma.product.create({
      data: {
        ...productData,
        variants: {
          connect: createdVariants.map((variant) => ({ id: variant.id })),
        },
      },
    });

    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
