import EmployeeRepository from "@repositories/EmployeeRepository/EmployeeRepository";

export default class DeleteEmployee {
  private repository: EmployeeRepository;

  constructor() {
    this.repository = new EmployeeRepository();
  }

  async execute(id: number) {
    const employee = this.repository.showEmployee(id);

    if (!employee) {
      throw new Error("employee not found");
    }

    await this.repository.destroy(id);
  }
}
