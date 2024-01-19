import Sale from "@entities/sale/Sale";
import SaleRepository from "@repositories/SaleRepository/SaleRepository";

export default class FindSale {
  private repoitory: SaleRepository;

  constructor() {
    this.repoitory = new SaleRepository();
  }

  async execute(id: number): Promise<Sale> {
    const sale = await this.repoitory.showSale(id);
    if (!sale) {
      throw new Error("Sale not found");
    }

    return sale;
  }
}
