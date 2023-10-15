import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
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

  findByEmail(email: string) {
    return this.prisma.customer.findUnique({
      where: { email },
    });
  }
}
