import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Controller('/customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/create')
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return await this.customerService.create(createCustomerDto);
  }
}
