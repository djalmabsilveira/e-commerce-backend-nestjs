import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

export interface UserAuthRequest extends Request {
  user: User;
}
