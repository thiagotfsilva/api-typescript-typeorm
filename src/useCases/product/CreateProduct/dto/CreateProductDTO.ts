import { IsDecimal, IsInt, IsNotEmpty } from "class-validator";

export default class CreateProductDTO {
  @IsNotEmpty()
  productName: string;
  @IsNotEmpty()
  @IsDecimal()
  price: number;
  @IsNotEmpty()
  @IsInt()
  quantity: number;
}
