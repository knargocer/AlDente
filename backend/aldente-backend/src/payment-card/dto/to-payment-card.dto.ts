import { PaymentCard } from '../entities/payment-card.entity';
import { PaymentCardDto } from './payment-card.dto';

export const toPaymentCardDto = (data: PaymentCard): PaymentCardDto => {
  const { card_number, card_holder_name, valid_thru, csv, client_username } =
    data;
  const paymentCardDto: PaymentCardDto = {
    card_number,
    card_holder_name,
    valid_thru,
    csv,
    client_username,
  };
  return paymentCardDto;
};
