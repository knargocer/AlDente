import { IsNotEmpty } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty() amount: number;
  @IsNotEmpty() name: string;
  @IsNotEmpty() price: number;
  @IsNotEmpty() client_username: string;
  @IsNotEmpty() cook_username: string;
}
