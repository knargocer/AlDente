import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { toPaymentCardDto } from './dto/to-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';
import { PaymentCard } from './entities/payment-card.entity';

@Injectable()
export class PaymentCardService {
  constructor(
    @InjectModel('PaymentCard')
    private readonly PaymentCardModel: Model<PaymentCard>,
  ) {}

  async create(createPaymentCardDto: CreatePaymentCardDto) {
    const { card_number, card_holder_name, valid_thru, csv, client_username } =
      createPaymentCardDto;

    const newPaymentCard = new this.PaymentCardModel({
      card_number,
      card_holder_name,
      valid_thru,
      csv,
      client_username,
    });
    const paymentCard = await newPaymentCard.save();
    return toPaymentCardDto(paymentCard);
  }

  async findAll() {
    const paymentCards = await this.PaymentCardModel.find();
    return paymentCards;
  }

  async findOne(id: string) {
    const paymentCard = await this.findOne(id);
    return paymentCard;
  }

  update(id: number, updatePaymentCardDto: UpdatePaymentCardDto) {
    return `This action updates a #${id} paymentCard`;
  }

  async remove(id: number) {
    const result = await this.PaymentCardModel.deleteOne({ _id: id }).exec();
    if (!result) {
      throw new NotFoundException('There is no such a card');
    }
  }
}
