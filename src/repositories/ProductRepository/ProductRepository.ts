import Product from "@entities/product/Product";
import { AppDataSource } from "src/database/data-source";
import { Repository } from "typeorm";

export default class ProductRepository {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  async getAll(): Promise<Product[]> {
    const productsList = await this.productRepository.find();
    return productsList;
  }

  async showProduct(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new Error("product not found");
    }
    return product;
  }

  async update(
    id: number,
    nameProduct: string,
    quantity: number,
    price: number,
  ): Promise<Product> {
    const product = await this.showProduct(id);
    if (!product) {
      throw new Error("product not found");
    }
    product.nameProduct = nameProduct;
    product.price = price;
    product.quantity = quantity;

    this.productRepository.save(product);
    return product;
  }

  async save(
    nameProduct: string,
    quantity: number,
    price: number,
  ): Promise<Product> {
    const product = this.productRepository.create({
      nameProduct,
      quantity,
      price,
    });
    this.productRepository.save(product);
    return product;
  }

  async destroy(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
