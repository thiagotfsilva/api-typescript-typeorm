import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import Address from "../address/Address";
import Sale from "../sale/Sale";
import User from "../user/User";

@Entity("clients")
export default class Client extends User {
  @Column()
  cpf: string;

  @OneToOne(() => Address, (address) => address.client, {
    cascade: true,
  })
  address: Address;

  @OneToMany(() => Sale, (sale) => sale.client, {
    cascade: true,
  })
  sale: Sale[];
}
