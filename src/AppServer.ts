import { Server } from "@overnightjs/core";
import * as bodyparser from "body-parser";
import UserController from "./controllers/UserController";
import 'dotenv/config';

export default class AppSever extends Server {
  constructor() {
    super();
    this.init();
  }

  private init() {
    this.setup();
    this.setupController();
  }

  private setup() {
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
  }

  private setupController() {
    const userController = new UserController();
    super.addControllers([userController]);
  }

  public start() {
    const port = process.env.PORT;
    this.app.listen(port, () =>
      console.log(`Server is running in port ${port}`)
    );
  }
}
