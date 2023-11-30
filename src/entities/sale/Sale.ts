import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => Product, (product) => product.sale)
  @JoinColumn({ name: "productId" })
  product: Product[];

  @ManyToOne(() => Employee, (employee) => employee.sale)
  @JoinColumn({ name: "employeeId" })
  employee: Employee;

  @ManyToOne(() => Client, (client) => client.sale)
  @JoinColumn({ name: "clientId" })
  client: Client;
}
