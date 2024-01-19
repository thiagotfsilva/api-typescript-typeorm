import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class CreateEmployeeDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  office: string;
  @IsNotEmpty()
  @IsNumber()
  quantitySale: string;
  @IsNotEmpty()
  cpf: string;
}
