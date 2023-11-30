import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Sale from "../sale/Sale";
@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn()  
  id: number;

  @Column()
  nameProduct: string;
  @Column()
  quantity: string;
  @Column()
  price: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Sale, (sale) => sale.product)
  sale: Sale
}
