import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { OrderItemScema } from './entities/order-item.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'OrderItem', schema: OrderItemScema }]),
  ],
  controllers: [OrderItemController],
  providers: [OrderItemService],
  exports: [OrderItemModule],
})
export class OrderItemModule {}
