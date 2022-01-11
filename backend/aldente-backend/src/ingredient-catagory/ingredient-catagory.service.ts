import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIngredientCatagoryDto } from './dto/create-ingredient-catagory.dto';
import { toIngredientCatagoryDto } from './dto/to-ingredient-catagory.dto';
import { UpdateIngredientCatagoryDto } from './dto/update-ingredient-catagory.dto';
import { IngredientCatagory } from './entities/ingredient-catagory.entity';

@Injectable()
export class IngredientCatagoryService {
  constructor(
    @InjectModel('IngredientCatagory')
    private readonly IngredientCatagoryModel: Model<IngredientCatagory>,
  ) {}

  async create(createIngredientCatagoryDto: CreateIngredientCatagoryDto) {
    const { name } = createIngredientCatagoryDto;
    const newCatagory = new this.IngredientCatagoryModel({
      name,
    });
    const catagory = await newCatagory.save();
    return toIngredientCatagoryDto(catagory);
  }

  findAll() {
    return `This action returns all ingredientCatagory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientCatagory`;
  }

  update(id: number, updateIngredientCatagoryDto: UpdateIngredientCatagoryDto) {
    return `This action updates a #${id} ingredientCatagory`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientCatagory`;
  }
}
