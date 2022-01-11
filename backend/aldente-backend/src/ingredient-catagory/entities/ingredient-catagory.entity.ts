import * as mongoose from 'mongoose';

export const IngredientCatagorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export interface IngredientCatagory extends mongoose.Document {
  name: string;
}

mongoose.model('IngredientCatagory', IngredientCatagorySchema);
export default mongoose.model('IngredientCatagory', IngredientCatagorySchema);
