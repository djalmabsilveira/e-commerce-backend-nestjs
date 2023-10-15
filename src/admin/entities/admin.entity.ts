import { Address } from 'src/shared/entities/address.entity';
import { Entity } from 'typeorm';

@Entity()
export class Admin {
  adminName: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  addresses: Address[];
}
