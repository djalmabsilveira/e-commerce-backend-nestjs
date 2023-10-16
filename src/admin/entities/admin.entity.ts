import { Address } from 'src/shared/entities/address.entity';
import { Entity } from 'typeorm';

@Entity()
export class Admin {
  id: string;
  adminName: string;
  password: string;
  email: string;
  accessLevel: string;
  createdAt: Date;
  updatedAt: Date;
  addresses?: Address[];
}
