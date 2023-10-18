import { Entity } from 'typeorm';

@Entity()
export class Variant {
  color: string;
  imageUrl: string[];
}
