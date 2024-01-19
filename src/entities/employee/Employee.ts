import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import Sale from "../sale/Sale";
import Address from "../address/Address";
import User from "../user/User";

@Entity("employees")
export default class Employee extends User {
  @Column()
  office: string;
  @Column()
  quantitySale: string;
  @Column()
  cpf: string;

  @OneToOne(() => Address, (address) => address.client, {
    cascade: true,
  })
  address: Address;
  @OneToMany(() => Sale, (sale) => sale.employee, {
    cascade: true,
  })
  sale: Sale[];
}
