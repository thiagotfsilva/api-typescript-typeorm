import AppSever from "./AppServer";
import { AppDataSource } from "./database/data-source";

const server = new AppSever();

AppDataSource.initialize()
  .then(async () => console.log("Database connection success"))
  .catch((err) => console.error(err));

server.start();

