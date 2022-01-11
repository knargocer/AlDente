import { OrderItem } from '../entities/order-item.entity';
import { OrderItemDto } from './order-item.dto';

export const toOrderItemDto = (data: OrderItem): OrderItemDto => {
  const { amount, name, price, client_username, cook_username } = data;
  const OrderItemDto: OrderItemDto = {
    amount,
    name,
    price,
    client_username,
    cook_username,
  };
  return OrderItemDto;
};
