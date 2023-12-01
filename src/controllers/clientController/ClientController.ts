import { Controller, Delete, Get, Post } from "@overnightjs/core";
import { NextFunction, Request, Response } from "express";
import CreateClient from "../../useCases/client/CreateClient/CreateClient";
import FindAllClients from "../../useCases/client/FindAllClients/FindAllClients";
import FindClient from "../../useCases/client/FindClient/FindClient";
import DeleteClient from "../../useCases/client/DeleteClient/DeleteClient";
import UpdateClient from "../../useCases/client/UpdateClient/UpdateClient";
import ResponseHandler from "../../utils/http/ResponseHandler";
import HttpErro from "../../utils/http/errors/HttpErro";

@Controller("api/v1/clients")
export default class CreateClientController {
  private createClient: CreateClient;
  private findAllClients: FindAllClients;
  private findClient: FindClient;
  private deleteClient: DeleteClient;
  private updateClient: UpdateClient;

  constructor() {
    this.createClient = new CreateClient();
    this.findAllClients = new FindAllClients();
    this.findClient = new FindClient();
    this.deleteClient = new DeleteClient();
    this.updateClient = new UpdateClient();
  }

  @Post("")
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { name, email, cpf, password } = req.body;
      const client = await this.createClient.execute({
        name,
        email,
        cpf,
        password,
      });
      return ResponseHandler.sendResponse(
        res,
        client,
        "client created successfully",
        201
      );
    } catch (error) {
     next(error);
      
    }
  }

  @Get("")
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const clients = await this.findAllClients.execute();
      return res.status(200).json({ data: clients });
    } catch (error) {
      next(error);
    }
  }

  @Get(":id")
  async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const id = Number(req.params.id);
      const client = await this.findClient.execute(id);
      return ResponseHandler.sendResponse(res, client, "ok");
    } catch (error) {
      next(error);
    }
  }

  @Delete(":id")
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await this.deleteClient.execute(id);
      return res.status(203).json({});
    } catch (error) {
      const err = error as Error;
      return res.status(400).json(err.message);
    }
  }

  /* @Put(":id")
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { name, cpf, password } = req.body;
      const id = Number(req.params.id);
      const newClient = new UpdateClientDTO();
      newClient.name = name;
      newClient.cpf = cpf;
      newClient.password = password;
      // const client = this.updateClient.execute(id, {name, cpf, password}  );
      return res.status(200).json(client);
    } catch (error) {
      const err = error as Error;
      return res.status(400).json(err.message);
    }
  } */
}
