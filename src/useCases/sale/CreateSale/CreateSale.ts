import SaleRepository from "@repositories/SaleRepository/SaleRepository";
import CreateSaleDTO from "./dto/CreateSaleDTO";
import Sale from "@entities/sale/Sale";

export default class CreateSale {
  private repository: SaleRepository;

  constructor() {
    this.repository = new SaleRepository();
  }

  async execute({
    client,
    employee,
    product,
    amount,
    quantityProduct,
  }: CreateSaleDTO): Promise<Sale> {
    const sale = new CreateSaleDTO();
    sale.client = client;
    sale.employee = employee;
    sale.product = product;
    sale.amount = amount;
    sale.quantityProduct = quantityProduct;
    return await this.repository.create(
      sale.client,
      sale.employee,
      sale.product,
      sale.quantityProduct,
      sale.amount,
    );
  }
}
