import * as mongoose from 'mongoose';

export const OrderItemScema = new mongoose.Schema({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  client_username: { type: String, required: true },
  cook_username: { type: String, required: true },
});

export interface OrderItem extends mongoose.Document {
  amount: number;
  name: string;
  price: number;
  client_username: string;
  cook_username: string;
}

mongoose.model('OrderItem', OrderItemScema);
export default mongoose.model('OrderItem', OrderItemScema);
