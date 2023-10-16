import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAdiminDto: CreateAdminDto): Promise<Admin> {
    const { address, ...admin } = createAdiminDto;

    const hashedPassword = await bcrypt.hash(admin.password, 10);

    const createdAddress = await this.prisma.address.create({
      data: address,
    });

    const createdAdmin = await this.prisma.admin.create({
      data: {
        ...admin,
        password: hashedPassword,
        addresses: {
          connect: {
            id: createdAddress.id,
          },
        },
      },
    });

    return {
      ...createdAdmin,
      password: undefined,
    };
  }

  async findByEmail(email: string): Promise<Admin> {
    return await this.prisma.admin.findUnique({
      where: { email },
    });
  }
}
