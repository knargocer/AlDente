import { IsNotEmpty } from 'class-validator';
import { Date } from 'mongoose';
import { OrderItem } from 'src/order-item/entities/order-item.entity';

export class OrderDto {
  @IsNotEmpty() date: Date;
  @IsNotEmpty() client_username: string;
  @IsNotEmpty() price: number;
  @IsNotEmpty() orderitems: OrderItem[];
  @IsNotEmpty() cook_username: string;
  @IsNotEmpty() done: boolean;
}
