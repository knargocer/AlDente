import { IsNotEmpty } from 'class-validator';
import { Ingredient } from '../../ingredients/entities/ingredient.entity';
import { TYPE } from '../entities/product.entity';

export class CreateProductDto {
  @IsNotEmpty() cook_username: string;
  @IsNotEmpty() name: string;
  @IsNotEmpty() cuisine: string;
  @IsNotEmpty() price: number;
  @IsNotEmpty() type: TYPE;
  @IsNotEmpty() ingredients: Array<Ingredient>;
  @IsNotEmpty() avaliability: string;
}
