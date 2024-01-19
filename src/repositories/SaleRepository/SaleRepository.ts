import Client from "@entities/client/Client";
import Employee from "@entities/employee/Employee";
import Product from "@entities/product/Product";
import Sale from "@entities/sale/Sale";
import { AppDataSource } from "src/database/data-source";
import { Repository } from "typeorm";

export default class SaleRepository {
  private saleRepository: Repository<Sale>;

  constructor() {
    this.saleRepository = AppDataSource.getRepository(Sale);
  }

  async create(
    client: Client,
    employee: Employee,
    product: Product[],
    quantityProduct: number,
    amount: number,
  ): Promise<Sale> {
    const sale = new Sale();
    sale.client = client;
    sale.employee = employee;
    sale.product = product;
    sale.quantityProduct = quantityProduct;
    sale.amount = amount;
    await this.saleRepository.save(sale);

    return sale;
  }

  async update(
    id: number,
    client: Client,
    employee: Employee,
    product: Product[],
    quantityProduct: number,
    amount: number,
  ): Promise<Sale> {
    const sale = await this.showSale(id);
    if (!sale) {
      throw new Error("Sale not found!");
    }

    sale.client = client;
    sale.employee = employee;
    sale.product = product;
    sale.quantityProduct = quantityProduct;
    sale.amount = amount;

    return await this.saleRepository.save(sale);
  }

  async getSaleList(): Promise<Sale[]> {
    return await this.saleRepository.find();
  }

  async showSale(id: number): Promise<Sale> {
    const sale = await this.saleRepository.findOneBy({ id });
    if (!sale) {
      throw new Error("Sale not found");
    }

    return sale;
  }

  async destroy(id: number): Promise<void> {
    await this.saleRepository.delete(id);
  }
}
