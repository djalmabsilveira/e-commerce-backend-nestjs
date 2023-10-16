import { User } from 'src/user/entities/user.entity';
import { Entity } from 'typeorm';

@Entity()
export class Address {
  id: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}
