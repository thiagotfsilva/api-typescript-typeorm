import "dotenv/config";
import { Server } from "@overnightjs/core";
import * as bodyparser from "body-parser";
import { AppDataSource } from "./database/data-source";
import ClientController from "./controllers/clientController/ClientController";
import cors from "cors";

export default class AppSever extends Server {
  constructor() {
    super();
    this.init();
  }

  private init() {
    this.setup();
    this.setupController();
    this.startDB();
  }

  private setup() {
    this.app.use(cors());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
  }

  private setupController() {
    const clientController = new ClientController()
    super.addControllers([clientController]);
  }

  public start() {
    const port = process.env.PORT;
    this.app.listen(port, () =>
      console.log(`Server is running in port ${port}`)
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
