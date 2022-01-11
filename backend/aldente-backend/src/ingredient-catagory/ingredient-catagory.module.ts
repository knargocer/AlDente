import { Module } from '@nestjs/common';
import { IngredientCatagoryService } from './ingredient-catagory.service';
import { IngredientCatagoryController } from './ingredient-catagory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientCatagorySchema } from './entities/ingredient-catagory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'IngredientCatagory', schema: IngredientCatagorySchema },
    ]),
  ],
  controllers: [IngredientCatagoryController],
  providers: [IngredientCatagoryService],
  exports: [IngredientCatagoryService],
})
export class IngredientCatagoryModule {}
