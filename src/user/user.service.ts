import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { address, ...user } = createUserDto;

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdAddress = await this.prisma.address.create({
      data: address,
    });

    const createdUser = await this.prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
        addresses: {
          connect: {
            id: createdAddress.id,
          },
        },
      },
    });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }
}
