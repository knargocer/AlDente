import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { toProductDto } from './dto/to-product.dto';
import { IngredientsService } from 'src/ingredients/ingredients.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly ProductModel: Model<Product>,
    private ingredientsService: IngredientsService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const {
      cook_username,
      name,
      cuisine,
      price,
      ingredients,
      type,
      avaliability,
    } = createProductDto;
    ingredients.forEach((i) => this.ingredientsService.create(i));
    const newProduct = new this.ProductModel({
      name,
      cook_username,
      cuisine,
      price,
      ingredients,
      type,
      avaliability,
    });
    const product = await newProduct.save();
    return toProductDto(product);
  }

  async findAll() {
    const products = await this.ProductModel.find();
    return products;
  }

  async findOne(id: number) {
    const product = await this.findOne(id);
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const result = await this.ProductModel.deleteOne({ _id: id }).exec();
    if (!result) {
      throw new NotFoundException('There is no such a product');
    }
  }
}
