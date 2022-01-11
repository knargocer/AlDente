import { ProductDto } from './product.dto';
import { Product } from '../entities/product.entity';

export const toProductDto = (data: Product): ProductDto => {
  const {
    cook_username,
    name,
    cuisine,
    price,
    ingredients,
    type,
    avaliability,
  } = data;
  const ProductDto: ProductDto = {
    cook_username,
    name,
    cuisine,
    price,
    ingredients,
    type,
    avaliability,
  };
  return ProductDto;
};
