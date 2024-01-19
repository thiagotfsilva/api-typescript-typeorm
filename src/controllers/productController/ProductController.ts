import { Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import CreateProduct from "@useCases/product/CreateProduct/CreateProduct";
import DeleteProduct from "@useCases/product/DeleteProduct/DeleteProduct";
import FindAllProducts from "@useCases/product/FindAllProducts/FindAllProducts";
import FindProduct from "@useCases/product/FindProduct/FindProduct";
import UpdateProduct from "@useCases/product/UpdateProduct/UpdateProduct";
import ResponseHandler from "@utils/http/ResponseHandler";
import { NextFunction, Request, Response } from "express";

@Controller("api/v1/products")
export default class ProductController {
  private findAllProducts: FindAllProducts;
  private findProduct: FindProduct;
  private createProduct: CreateProduct;
  private updateProduct: UpdateProduct;
  private deleteProduct: DeleteProduct;

  constructor() {
    this.findAllProducts = new FindAllProducts();
    this.findProduct = new FindProduct();
    this.createProduct = new CreateProduct();
    this.updateProduct = new UpdateProduct();
    this.deleteProduct = new DeleteProduct();
  }

  @Get("")
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const products = await this.findAllProducts.execute();
      return ResponseHandler.sendResponse(res, products, "ok");
    } catch (error) {
      next(error);
    }
  }

  @Get(":id")
  async get(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = Number(req.params.id);
      const product = await this.findProduct.execute(id);
      return ResponseHandler.sendResponse(res, product, "ok", 200);
    } catch (error) {
      next(error);
    }
  }

  @Post("")
  async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { productName, quantity, price } = req.body;
      const product = await this.createProduct.execute({
        productName,
        quantity,
        price,
      });
      return ResponseHandler.sendResponse(
        res,
        product,
        "Product created successfully",
        201,
      );
    } catch (error) {
      next(error);
    }
  }

  @Put(":id")
  async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { productName, quantity, price } = req.body;
      const id = Number(req.params.id);
      const product = await this.updateProduct.execute({
        id,
        productName,
        quantity,
        price,
      });
      return ResponseHandler.sendResponse(res, product, "Product updated", 200);
    } catch (error) {
      next(error);
    }
  }

  @Delete(":id")
  async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = Number(req.params.id);
      await this.deleteProduct.execute(id);
      return ResponseHandler.sendResponse(res, "", "Produto deleted", 204);
    } catch (error) {
      next(error);
    }
  }
}
