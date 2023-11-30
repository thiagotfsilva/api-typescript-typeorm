import { AppDataSource } from "../../database/data-source";
import Client from "../../entities/client/Client";
import { Repository } from "typeorm";

export default class ClientRepository {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = AppDataSource.getRepository(Client);
  }

  async getAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async save(
    name?: string,
    email?: string,
    password?: string,
    cpf?: string
  ): Promise<Client> {
    const client = this.clientRepository.create({ name, email, password, cpf });
    return this.clientRepository.save(client);
  }

  async get(id: number): Promise<Client | null> {
    return await this.clientRepository.findOneBy({ id });
  }

  async destroy(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
