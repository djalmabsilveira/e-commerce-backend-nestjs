import { Request } from 'express';
import { Admin } from 'src/admin/entities/admin.entity';

export interface AdminAuthRequest extends Request {
  user: Admin;
}
