import SaleRepository from "@repositories/SaleRepository/SaleRepository";

export default class DeleteSale {
  private repository: SaleRepository;

  constructor() {
    this.repository = new SaleRepository();
  }

  async execute(id: number): Promise<void> {
    const sale = await this.repository.showSale(id);

    if (!sale) {
      throw new Error(sale);
    }

    await this.repository.destroy(id);
  }
}
