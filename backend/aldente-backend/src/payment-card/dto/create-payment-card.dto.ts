import { IsNotEmpty } from 'class-validator';

export class CreatePaymentCardDto {
  @IsNotEmpty() card_number: number;
  @IsNotEmpty() card_holder_name: string;
  @IsNotEmpty() valid_thru: number;
  @IsNotEmpty() csv: number;
  @IsNotEmpty() client_username: string;
}
