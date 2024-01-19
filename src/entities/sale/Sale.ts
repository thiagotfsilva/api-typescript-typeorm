import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Product from "../product/Product";
import Employee from "../employee/Employee";
import Client from "../client/Client";

@Entity("sales")
export default class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantityProduct: number;
  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Product)
  @JoinTable({ name: "producsts" })
  product: Product[];

  @ManyToOne(() => Employee, (employee) => employee.sale)
  @JoinColumn({ name: "employeeId" })
  employee: Employee;

  @ManyToOne(() => Client, (client) => client.sale)
  @JoinColumn({ name: "clientId" })
  client: Client;
}
