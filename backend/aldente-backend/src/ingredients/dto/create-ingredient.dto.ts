import { IsNotEmpty } from 'class-validator';
import { IngredientCatagory } from 'src/ingredient-catagory/entities/ingredient-catagory.entity';

export class CreateIngredientDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty()
  catagory: IngredientCatagory;
}
