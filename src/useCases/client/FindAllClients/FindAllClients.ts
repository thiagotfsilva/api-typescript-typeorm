import Client from "../../../entities/client/Client";
import ClientRepository from "../../../repositories/ClientRepository/ClientRepository";

export default class FindAllClients {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(): Promise<Client[]> {
    return await this.repository.getAll();
  }
}
