import { IsNotEmpty } from 'class-validator';

export class IngredientCatagoryDto {
  @IsNotEmpty() name: string;
}
