import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';
@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { address, ...customer } = createCustomerDto;

    const hashedPassword = await bcrypt.hash(customer.password, 10);

    const createdAddress = await this.prisma.address.create({
      data: address,
    });

    const createdCustomer = await this.prisma.customer.create({
      data: {
        ...customer,
        password: hashedPassword,
        addresses: {
          connect: {
            id: createdAddress.id,
          },
        },
      },
    });

    return {
      ...createdCustomer,
      password: undefined,
    };
  }

  async findByEmail(email: string): Promise<Customer> {
    return await this.prisma.customer.findUnique({
      where: { email },
    });
  }
}
