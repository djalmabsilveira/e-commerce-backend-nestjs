import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'teste';
  }

  validateUser(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
}
