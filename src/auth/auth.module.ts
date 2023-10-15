import { Module } from '@nestjs/common';
import { CustomerModule } from 'src/customer/customer.module';
import { LocalStrategy } from 'src/strategies/local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [CustomerModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
