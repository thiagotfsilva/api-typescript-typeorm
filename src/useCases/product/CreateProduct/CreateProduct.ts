import Product from "@entities/product/Product";
import ProductRepository from "@repositories/ProductRepository/ProductRepository";
import CreateProductDTO from "./dto/CreateProductDTO";

export default class CreateProduct {
  private repositiry: ProductRepository;

  constructor() {
    this.repositiry = new ProductRepository();
  }

  async execute({
    productName,
    quantity,
    price,
  }: CreateProductDTO): Promise<Product> {
    const product = new CreateProductDTO();
    product.productName = productName;
    product.quantity = quantity;
    product.price = price;

    return this.repositiry.save(
      product.productName,
      product.quantity,
      product.price,
    );
  }
}
