import { IsNotEmpty } from 'class-validator';
import { Ingredient } from '../../ingredients/entities/ingredient.entity';
import { TYPE } from '../entities/product.entity';

export class ProductDto {
  @IsNotEmpty() cook_username: string;
  @IsNotEmpty() name: string;
  @IsNotEmpty() cuisine: string;
  @IsNotEmpty() price: number;
  @IsNotEmpty() ingredients: Ingredient[];
  @IsNotEmpty() type: TYPE;
  @IsNotEmpty() avaliability: string;
}
