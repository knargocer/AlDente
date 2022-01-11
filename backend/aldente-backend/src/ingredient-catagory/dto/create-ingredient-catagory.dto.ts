import { IsNotEmpty } from 'class-validator';

export class CreateIngredientCatagoryDto {
  @IsNotEmpty() name: string;
}
