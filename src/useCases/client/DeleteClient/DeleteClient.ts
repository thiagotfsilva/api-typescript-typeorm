import ClientRepository from "../../../repositories/ClientRepository/ClientRepository";

export default class DeleteClient {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(id: number): Promise<void> {
    if (!id) {
      throw new Error("id is missing");
    }

    await this.repository.destroy(id);
  }
}
