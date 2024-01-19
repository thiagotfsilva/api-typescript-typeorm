import CreateSaleDTO from "@useCases/sale/CreateSale/dto/CreateSaleDTO";
import { IsNotEmpty } from "class-validator";

export default class UpdateSaleDTO extends CreateSaleDTO {
  @IsNotEmpty()
  id: number;
}
