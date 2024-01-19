import "reflect-metadata";
import "dotenv/config";
import Client from "../entities/client/Client";
import Employee from "../entities/employee/Employee";
import { DataSource } from "typeorm";
import Address from "../entities/address/Address";
import Product from "../entities/product/Product";
import Sale from "../entities/sale/Sale";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "mysqlfap",
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  synchronize: false,
  entities: [Employee, Client, Address, Product, Sale],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
});
