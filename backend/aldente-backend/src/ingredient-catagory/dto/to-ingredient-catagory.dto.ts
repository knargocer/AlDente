import { IngredientCatagory } from '../entities/ingredient-catagory.entity';
import { IngredientCatagoryDto } from './ingredient-catagory.dto';

export const toIngredientCatagoryDto = (
  data: IngredientCatagory,
): IngredientCatagoryDto => {
  const { name } = data;
  const IngredientCatagoryDto: IngredientCatagoryDto = { name };
  return IngredientCatagoryDto;
};
