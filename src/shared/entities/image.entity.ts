import { Entity } from 'typeorm';

@Entity()
export class Image {
  id: string;
  imageUrl: string;
}
