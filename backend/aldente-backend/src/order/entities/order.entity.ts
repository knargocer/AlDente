import * as mongoose from 'mongoose';
import { Date } from 'mongoose';
import { OrderItem } from 'src/order-item/entities/order-item.entity';

export const OrderSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: Date.now },
  client_username: { type: String, required: true },
  price: { type: Number, required: true },
  orderitems: { type: Array, required: true },
  cook_username: { type: String, required: true },
  done: { type: Boolean, required: true },
});

export interface Order extends mongoose.Document {
  date: Date;
  client_username: string;
  cuisine: string;
  price: number;
  orderitems: [OrderItem];
  cook_username: string;
  done: boolean;
}

mongoose.model('Order', OrderSchema);
export default mongoose.model('Order', OrderSchema);
