import Employee from "@entities/employee/Employee";
import EmployeeRepository from "@repositories/EmployeeRepository/EmployeeRepository";
import CreateEmployeeDTO from "./dto/CreateEmployeeDTO";

export default class CreateEmploye {
  private repository: EmployeeRepository;

  constructor() {
    this.repository = new EmployeeRepository();
  }

  async execute(data: CreateEmployeeDTO): Promise<Employee> {
    const employee = new CreateEmployeeDTO();
    employee.name = data.name;
    employee.cpf = data.cpf;
    employee.email = data.email;
    employee.password = data.password;
    employee.office = data.office;
    employee.quantitySale = data.quantitySale;

    return await this.repository.save(
      employee.name,
      employee.email,
      employee.password,
      employee.office,
      employee.quantitySale,
      employee.cpf,
    );
  }
}
