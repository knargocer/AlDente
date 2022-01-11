import * as mongoose from 'mongoose';

export const PaymentCardSchema = new mongoose.Schema({
  card_number: { type: Number, required: true, unique: true },
  card_holder_name: { type: String, required: true },
  valid_thru: { type: String, required: true },
  csv: { type: Number, required: true },
  client_username: { type: String, required: true },
});

export interface PaymentCard extends mongoose.Document {
  card_number: number;
  card_holder_name: string;
  valid_thru: string;
  csv: number;
  client_username: string;
}

mongoose.model('PaymentCard', PaymentCardSchema);

export default mongoose.model('PaymentCard', PaymentCardSchema);
