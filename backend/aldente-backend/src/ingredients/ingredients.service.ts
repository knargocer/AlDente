import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { toIngredientDto } from './dto/to-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { IngredientCatagoryService } from 'src/ingredient-catagory/ingredient-catagory.service';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel('Ingredient')
    private readonly IngredientModel: Model<Ingredient>,
    private ingredientCatagoryService: IngredientCatagoryService,
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {
    const { name, catagory } = createIngredientDto;
    const newIngredient = new this.IngredientModel({
      name,
      catagory,
    });
    this.ingredientCatagoryService.create(catagory);
    const ingredient = await newIngredient.save();
    return toIngredientDto(ingredient);
  }

  findAll() {
    return `This action returns all ingredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
