import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientCatagoryService } from './ingredient-catagory.service';
import { CreateIngredientCatagoryDto } from './dto/create-ingredient-catagory.dto';
import { UpdateIngredientCatagoryDto } from './dto/update-ingredient-catagory.dto';

@Controller('ingredient-catagory')
export class IngredientCatagoryController {
  constructor(
    private readonly ingredientCatagoryService: IngredientCatagoryService,
  ) {}

  @Post()
  create(@Body() createIngredientCatagoryDto: CreateIngredientCatagoryDto) {
    return this.ingredientCatagoryService.create(createIngredientCatagoryDto);
  }

  @Get()
  findAll() {
    return this.ingredientCatagoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientCatagoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientCatagoryDto: UpdateIngredientCatagoryDto,
  ) {
    return this.ingredientCatagoryService.update(
      +id,
      updateIngredientCatagoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientCatagoryService.remove(+id);
  }
}
