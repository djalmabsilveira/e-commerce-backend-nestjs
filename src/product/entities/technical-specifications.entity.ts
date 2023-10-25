import { Entity } from 'typeorm';

@Entity()
export class TechnicalSpecification {
  specKey: String;
  specDescription: String;
}
