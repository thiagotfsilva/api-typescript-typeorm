import ProductRepository from "@repositories/ProductRepository/ProductRepository";

export default class DeleteProduct {
  private repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async execute(id: number): Promise<void> {
    if (!(await this.repository.showProduct(id))) {
      throw new Error("Product not found!");
    }

    await this.repository.destroy(id);
  }
}
