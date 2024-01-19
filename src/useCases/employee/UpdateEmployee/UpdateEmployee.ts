import EmployeeRepository from "@repositories/EmployeeRepository/EmployeeRepository";
import UpdateEmployeeDTO from "./dto/UpdateEmployeeDTO";
import Employee from "@entities/employee/Employee";

export default class UpdateEmployee {
  private repository: EmployeeRepository;

  constructor() {
    this.repository = new EmployeeRepository();
  }

  async execute({
    id,
    name,
    email,
    password,
    cpf,
    quantitySale,
    office,
  }: UpdateEmployeeDTO): Promise<Employee> {
    const employee = await this.repository.showEmployee(id);

    if (!employee) {
      throw new Error("Employee not found!");
    }

    employee.name = name;
    employee.email = email;
    employee.password = password;
    employee.cpf = cpf;
    employee.quantitySale = quantitySale;
    employee.office = office;

    return this.repository.update(
      employee.id,
      employee.name,
      employee.password,
      employee.office,
      employee.quantitySale,
      employee.cpf,
    );
  }
}
