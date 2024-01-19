import Employee from "@entities/employee/Employee";
import EmployeeRepository from "@repositories/EmployeeRepository/EmployeeRepository";

export default class FindEmployee {
  private repository: EmployeeRepository;

  constructor() {
    this.repository = new EmployeeRepository();
  }

  async execute(id: number): Promise<Employee> {
    const employee = this.repository.showEmployee(id);
    if (!employee) {
      throw new Error("employee not found");
    }

    return employee;
  }
}
