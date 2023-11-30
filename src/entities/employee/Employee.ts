import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Sale from "../sale/Sale";

@Entity("employees")
export default class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  office: string;
  @Column()
  quantitySale: string;
  @Column()
  cpf: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Sale, (sale) => sale.employee, {
    cascade: true,
  })
  sale: Sale[];
}
