import Sale from "@entities/sale/Sale";
import SaleRepository from "@repositories/SaleRepository/SaleRepository";

export default class FindaAllSales {
  private repository: SaleRepository;

  constructor() {
    this.repository = new SaleRepository();
  }

  async execute(): Promise<Sale[]> {
    return await this.repository.getSaleList();
  }
}
