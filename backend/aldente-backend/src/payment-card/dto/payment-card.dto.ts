import { IsNotEmpty } from 'class-validator';

export class PaymentCardDto {
  @IsNotEmpty() card_number: number;
  @IsNotEmpty() card_holder_name: string;
  @IsNotEmpty() valid_thru: string;
  @IsNotEmpty() csv: number;
  @IsNotEmpty() client_username: string;
}
