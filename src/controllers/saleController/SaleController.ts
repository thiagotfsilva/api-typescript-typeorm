import { Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import CreateSale from "@useCases/sale/CreateSale/CreateSale";
import DeleteSale from "@useCases/sale/DeleteSale/DeleteSale";
import FindSale from "@useCases/sale/FIndSale/FindaSale";
import FindaAllSales from "@useCases/sale/FindAllSales/FindaAllSales";
import UpdateSale from "@useCases/sale/UpdateSale/UpdateSale";
import ResponseHandler from "@utils/http/ResponseHandler";
import { Request, Response, NextFunction } from "express";

@Controller("api/v1/sales")
export default class SaleController {
  private findAllSales: FindaAllSales;
  private findSale: FindSale;
  private createSale: CreateSale;
  private updateSale: UpdateSale;
  private deleteSale: DeleteSale;

  constructor() {
    this.findAllSales = new FindaAllSales();
    this.findSale = new FindSale();
    this.createSale = new CreateSale();
    this.updateSale = new UpdateSale();
    this.deleteSale = new DeleteSale();
  }
  @Get("")
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const sales = await this.findAllSales.execute();
      return ResponseHandler.sendResponse(res, sales, "ok", 200);
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
      const sale = await this.findSale.execute(id);
      return ResponseHandler.sendResponse(res, sale, "ok", 200);
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
      const { client, employee, product, amount, quantityProduct } = req.body;
      const sale = await this.createSale.execute({
        client,
        employee,
        product,
        amount,
        quantityProduct,
      });
      return ResponseHandler.sendResponse(
        res,
        sale,
        "Sale created successfully",
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
      const { client, employee, product, amount, quantityProduct } = req.body;
      const id = Number(req.params.id);
      const sale = await this.updateSale.execute({
        id,
        client,
        employee,
        product,
        amount,
        quantityProduct,
      });
      return ResponseHandler.sendResponse(res, sale, "Product updated", 200);
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
      await this.deleteSale.execute(id);
      return ResponseHandler.sendResponse(res, "", "Sale deleted", 204);
    } catch (error) {
      next(error);
    }
  }
}
