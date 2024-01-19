import { Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import CreateEmploye from "@useCases/employee/CreateEmployee/CreateEmployee";
import DeleteEmployee from "@useCases/employee/DeleteEmployee/DeleteEmployee";
import FindAllEmployee from "@useCases/employee/FindAllEmployee/FindaAllEmployee";
import FindEmployee from "@useCases/employee/FindEmployee/FindEmployee";
import UpdateEmployee from "@useCases/employee/UpdateEmployee/UpdateEmployee";
import ResponseHandler from "@utils/http/ResponseHandler";
import { Request, Response, NextFunction } from "express";

@Controller("api/v1/employees")
export default class EmployeeController {
  private createEmployee: CreateEmploye;
  private findAllEmployee: FindAllEmployee;
  private findEmployee: FindEmployee;
  private updateEmployee: UpdateEmployee;
  private deleteEmployee: DeleteEmployee;

  constructor() {
    this.createEmployee = new CreateEmploye();
    this.findAllEmployee = new FindAllEmployee();
    this.findEmployee = new FindEmployee();
    this.updateEmployee = new UpdateEmployee();
    this.deleteEmployee = new DeleteEmployee();
  }

  @Post("")
  async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { name, email, password, cpf, quantitySale, office } = req.body;
      const employee = await this.createEmployee.execute({
        name,
        email,
        password,
        cpf,
        quantitySale,
        office,
      });
      return ResponseHandler.sendResponse(
        res,
        employee,
        "Employee created successfully",
        201,
      );
    } catch (error) {
      next(error);
    }
  }

  @Get("")
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const employees = await this.findAllEmployee.execute();
      return ResponseHandler.sendResponse(res, employees, "ok", 200);
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
      const employee = await this.findEmployee.execute(id);
      return ResponseHandler.sendResponse(res, employee, "ok", 200);
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
      const { id, name, email, password, cpf, quantitySale, office } = req.body;
      const employee = await this.updateEmployee.execute({
        id,
        name,
        email,
        password,
        cpf,
        quantitySale,
        office,
      });
      return ResponseHandler.sendResponse(
        res,
        employee,
        "employee updated",
        200,
      );
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
      await this.deleteEmployee.execute(id);
      return ResponseHandler.sendResponse(res, [], "Employee deleted", 204);
    } catch (error) {
      next(error);
    }
  }
}
