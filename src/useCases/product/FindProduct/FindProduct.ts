import Product from "@entities/product/Product";
import ProductRepository from "@repositories/ProductRepository/ProductRepository";

export default class FindProduct {
  private repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async execute(id: number): Promise<Product> {
    const product = this.repository.showProduct(id);
    if (!product) {
      throw new Error("Product not found.");
    }

    return product;
  }
}
