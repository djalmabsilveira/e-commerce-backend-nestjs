import { Body, Controller, Post } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/is-public.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @IsPublic()
  @Post('/create')
  async create(@Body() createProductDto: CreateProductDto): Promise<string> {
    return await this.productService.create(createProductDto);
  }
}
