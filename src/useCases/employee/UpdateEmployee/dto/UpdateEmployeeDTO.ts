import CreateEmployeeDTO from "@useCases/employee/CreateEmployee/dto/CreateEmployeeDTO";
import { IsNotEmpty, IsNumber } from "class-validator";

export default class UpdateEmployeeDTO extends CreateEmployeeDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
