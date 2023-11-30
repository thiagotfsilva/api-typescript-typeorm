import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "../address/Address";
import Sale from "../sale/Sale";

@Entity("clients")
export default class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, (address) => address.client, {
    cascade: true,
  })
  address: Address;

  @OneToMany(() => Sale, (sale) => sale.client, {
    cascade: true,
  })
  sale: Sale[]

}
