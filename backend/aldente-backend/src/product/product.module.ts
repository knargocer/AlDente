import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './entities/product.entity';
import { IngredientsModule } from 'src/ingredients/ingredients.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    IngredientsModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductModule],
})
export class ProductModule {}
