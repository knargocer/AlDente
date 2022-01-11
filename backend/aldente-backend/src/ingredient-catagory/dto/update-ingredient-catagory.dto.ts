import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientCatagoryDto } from './create-ingredient-catagory.dto';

export class UpdateIngredientCatagoryDto extends PartialType(CreateIngredientCatagoryDto) {}
