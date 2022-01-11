import { IngredientDto } from './ingredient.dto';
import { Ingredient } from '../entities/ingredient.entity';

export const toIngredientDto = (data: Ingredient): IngredientDto => {
  const { name, catagory } = data;
  const IngredientDto: IngredientDto = { name, catagory };
  return IngredientDto;
};
