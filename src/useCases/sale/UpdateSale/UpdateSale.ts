import SaleRepository from "@repositories/SaleRepository/SaleRepository";
import UpdateSaleDTO from "./dto/UpdateSaleDTO";
import Sale from "@entities/sale/Sale";

export default class UpdateSale {
  private repository: SaleRepository;

  constructor() {
    this.repository = new SaleRepository();
  }

  async execute({
    id,
    client,
    employee,
    product,
    quantityProduct,
    amount,
  }: UpdateSaleDTO): Promise<Sale> {
    const sale = await this.repository.showSale(id);
    if (!sale) {
      throw new Error("Sale not found");
    }

    sale.client = client;
    sale.employee = employee;
    sale.product = product;
    sale.amount = amount;
    sale.quantityProduct = quantityProduct;

    return await this.repository.update(
      sale.id,
      sale.client,
      sale.employee,
      sale.product,
      sale.quantityProduct,
      sale.amount,
    );
  }
}
