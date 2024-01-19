import Client from "@entities/client/Client";
import ClientRepository from "@repositories/ClientRepository/ClientRepository";

export default class FindClient {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(id: number): Promise<Client | null> {
    if (!id) {
      throw new Error("id is missing");
    }
    return await this.repository.get(id);
  }
}
