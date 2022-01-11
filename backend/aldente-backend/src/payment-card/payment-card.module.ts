import { Module } from '@nestjs/common';
import { PaymentCardService } from './payment-card.service';
import { PaymentCardController } from './payment-card.controller';
import { PaymentCardSchema } from './entities/payment-card.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PaymentCard', schema: PaymentCardSchema },
    ]),
  ],
  controllers: [PaymentCardController],
  providers: [PaymentCardService],
  exports: [PaymentCardModule],
})
export class PaymentCardModule {}
