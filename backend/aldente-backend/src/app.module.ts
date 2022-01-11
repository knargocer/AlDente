import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { IngredientCatagoryModule } from './ingredient-catagory/ingredient-catagory.module';
import { PaymentCardModule } from './payment-card/payment-card.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/aldentedb'),
    UserModule,
    IngredientsModule,
    OrderModule,
    OrderItemModule,
    ProductModule,
    AuthModule,
    IngredientCatagoryModule,
    PaymentCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
