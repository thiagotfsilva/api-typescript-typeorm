import Employee from "@entities/employee/Employee";
import { AppDataSource } from "src/database/data-source";
import { Repository } from "typeorm";

export default class EmployeeRepository {
  private employeeRepository: Repository<Employee>;

  constructor() {
    this.employeeRepository = AppDataSource.getRepository(Employee);
  }

  async getlAll(): Promise<Employee[]> {
    const employeeList = await this.employeeRepository.find();
    return employeeList;
  }

  async showEmployee(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new Error("employee not found");
    }

    return employee;
  }

  async save(
    name: string,
    email: string,
    password: string,
    office: string,
    quantitySale: string,
    cpf: string,
  ): Promise<Employee> {
    const employee = this.employeeRepository.create({
      name,
      email,
      password,
      office,
      quantitySale,
      cpf,
    });
    this.employeeRepository.save(employee);
    return employee;
  }

  async update(
    id: number,
    name: string,
    password: string,
    office: string,
    quantitySale: string,
    cpf: string,
  ): Promise<Employee> {
    const employee = await this.showEmployee(id);
    if (!employee) {
      throw new Error("employee not found");
    }

    employee.name = name;
    employee.password = password;
    employee.office = office;
    employee.quantitySale = quantitySale;
    employee.cpf = cpf;

    this.employeeRepository.save(employee);
    return employee;
  }

  async destroy(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
