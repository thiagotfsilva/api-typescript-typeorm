import Product from "@entities/product/Product";
import ProductRepository from "@repositories/ProductRepository/ProductRepository";

export default class FindAllProducts {
  private repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async execute(): Promise<Product[]> {
    const productsList = this.repository.getAll();
    return productsList;
  }
}
