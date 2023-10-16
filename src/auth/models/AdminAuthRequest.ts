import { Request } from 'express';
import { Admin } from 'src/admin/entities/admin.entity';

export interface CustomerAuthRequest extends Request {
  user: Admin;
}
