import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CustomerStrategy } from 'src/auth/strategies/customer.strategy';
import { CustomerModule } from 'src/customer/customer.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AdminStrategy } from './strategies/admin.strategy';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [
    AdminModule,
    CustomerModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CustomerStrategy, AdminStrategy],
})
export class AuthModule {}
