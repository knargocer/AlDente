import { OrderDto } from './order.dto';
import { Order } from '../entities/order.entity';

export const toOrderDto = (data: Order): OrderDto => {
  const { date, client_username, price, orderitems, cook_username, done } =
    data;
  const orderDto: OrderDto = {
    date,
    client_username,
    price,
    orderitems,
    cook_username,
    done,
  };
  return orderDto;
};
