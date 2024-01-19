import Client from "@entities/client/Client";
import Employee from "@entities/employee/Employee";
import Product from "@entities/product/Product";
import { IsNotEmpty } from "class-validator";

export default class CreateSaleDTO {
  @IsNotEmpty()
  client: Client;
  @IsNotEmpty()
  employee: Employee;
  @IsNotEmpty()
  product: Product[];
  @IsNotEmpty()
  quantityProduct: number;
  @IsNotEmpty()
  amount: number;
}
