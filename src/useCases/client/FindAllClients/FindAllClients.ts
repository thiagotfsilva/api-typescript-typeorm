import Client from "../../../entities/client/Client";
import ClientRepository from "../../../repositories/ClientRepository/ClientRepository";

export default class FindAllClients {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(info: any): Promise<Client[]> {
    return await this.repository.getAll(info);
  }
}
