import "dotenv/config";
import { Server } from "@overnightjs/core";
import * as bodyparser from "body-parser";
import { AppDataSource } from "./database/data-source";
import ClientController from "./controllers/clientController/ClientController";
import cors from "cors";
import { handleErrors } from "./middlewares/errors/handlerError";
import { handler404 } from "./middlewares/errors/handlerPageNotFound";
import ProductController from "@controllers/productController/ProductController";
import EmployeeController from "@controllers/employeeController/EmployeeController";
import SaleController from "@controllers/saleController/SaleController";

export default class AppSever extends Server {
  constructor() {
    super();
    this.init();
  }

  private init() {
    this.setup();
    this.setupController();
    this.setupErrorHandler();
    this.startDB();
  }

  private setup() {
    this.app.use(cors());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
  }

  private setupController() {
    const clientController = new ClientController();
    const productConroller = new ProductController();
    const employeeController = new EmployeeController();
    const saleController = new SaleController();
    super.addControllers([
      clientController,
      productConroller,
      employeeController,
      saleController,
    ]);
  }

  private setupErrorHandler() {
    this.app.use(handleErrors);
    this.app.use(handler404);
  }

  public start() {
    const port = process.env.PORT;
    this.app.listen(port, () =>
      console.log(`Server is running in port ${port}`),
    );
  }

  private async startDB(): Promise<void> {
    try {
      await AppDataSource.initialize();
    } catch (err) {
      console.log(err);
    }
  }
}
