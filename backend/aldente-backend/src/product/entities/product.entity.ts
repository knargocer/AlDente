import * as mongoose from 'mongoose';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';

export enum TYPE {
  DESSERT = 'DESSERT',
  DISH = 'DISH',
  DRINK = 'DRINK',
  APPETIZER = 'APPETIZER',
  SOUP = 'SOUP',
  SALAD = 'SALAD',
}

export const ProductSchema = new mongoose.Schema({
  avaliability: { type: String, required: true },
  name: { type: String, required: true },
  cuisine: { type: String, required: false },
  price: { type: Number, required: true },
  type: { type: String, enum: TYPE, required: true },
  cook_username: { type: String, required: true },
  ingredients: { type: Array, required: true },
});

export interface Product extends mongoose.Document {
  avaliability: string;
  name: string;
  cuisine: string;
  price: number;
  type: TYPE;
  cook_username: string;
  ingredients: [Ingredient];
}

mongoose.model('Product', ProductSchema);
export default mongoose.model('Product', ProductSchema);
