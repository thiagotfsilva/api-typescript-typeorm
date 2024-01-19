import ProductRepository from "@repositories/ProductRepository/ProductRepository";
import UpdateProductDTO from "./dto/UpdateProductDTo";

export default class UpdateProduct {
  private repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async execute({ productName, quantity, price }: UpdateProductDTO) {
    const product = new UpdateProductDTO();
    product.productName = productName;
    product.quantity = quantity;
    product.price = price;

    return this.repository.update(
      product.id,
      product.productName,
      product.quantity,
      product.price,
    );
  }
}
