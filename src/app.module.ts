import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { NotificationsModule } from './notifications/notifications.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ReportsModule } from './reports/reports.module';
import { ReviewsModule } from './reviews/reviews.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CategoriesModule,
    CartModule,
    AuthModule,
    ReviewsModule,
    PaymentModule,
    NotificationsModule,
    ReportsModule,
    PrismaModule,
    UserModule,
    OrderModule,
    ProductModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
