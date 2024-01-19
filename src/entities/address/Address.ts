import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Client from "../client/Client";

@Entity("address")
export default class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;
  @Column()
  district: string;
  @Column()
  city: string;
  @Column()
  number: number;
  @Column()
  zipCode: string;
  @Column()
  complement: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Client, (client) => client.address)
  @JoinColumn({ name: "clientId" })
  client: Client;
}
