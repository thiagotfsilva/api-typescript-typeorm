import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameProduct: string;
  @Column()
  quantity: number;
  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
