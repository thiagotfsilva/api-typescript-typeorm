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

    if (!await this.repository.get(id)) {
      throw new Error("Client not found");
    }

    await this.repository.destroy(id);
  }
}
