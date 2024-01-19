import Employee from "@entities/employee/Employee";
import EmployeeRepository from "@repositories/EmployeeRepository/EmployeeRepository";

export default class FindAllEmployee {
  private repository: EmployeeRepository;

  constructor() {
    this.repository = new EmployeeRepository();
  }

  async execute(): Promise<Employee[]> {
    return await this.repository.getlAll();
  }
}
