import * as mongoose from 'mongoose';
import {
  IngredientCatagory,
  IngredientCatagorySchema,
} from 'src/ingredient-catagory/entities/ingredient-catagory.entity';

export const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  catagory: { type: IngredientCatagorySchema, required: true },
});

export interface Ingredient extends mongoose.Document {
  name: string;
  catagory: IngredientCatagory;
}

mongoose.model('Ingredient', IngredientSchema);
export default mongoose.model('Ingredient', IngredientSchema);

// import * as mongoose from 'mongoose';

// export enum CATAGORY {
//   MEAT = 'MEAT',
//   FRUIT = 'FRUIT',
//   SEASONING = 'SEASONING',
//   DAIRY = 'DAIRY',
//   VEGETABLE = 'VEGETABLE',
//   OIL = 'OIL',
// }

// export const IngredientSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   catagory: { type: String, enum: CATAGORY, required: true },
// });

// export interface Ingredient extends mongoose.Document {
//   name: string;
//   catagory: CATAGORY;
// }

// mongoose.model('Ingredient', IngredientSchema);
// export default mongoose.model('Ingredient', IngredientSchema);
