import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/is-public.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  async create(@Body() createProductDto: CreateProductDto): Promise<string> {
    return await this.productService.create(createProductDto);
  }

  @IsPublic()
  @Get(`/details/:id`)
  async getById(@Param('id') id: string) {
    return await this.productService.getById(id);
  }
}
