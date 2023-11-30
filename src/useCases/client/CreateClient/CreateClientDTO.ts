import { IsEmail, IsNotEmpty } from "class-validator";

export default class CreateClientDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  cpf: string;
}
