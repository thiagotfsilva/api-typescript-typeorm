import Client from "@entities/client/Client";
import { AppDataSource } from "src/database/data-source";
import { Paginator } from "src/database/Paginator";
import { Repository } from "typeorm";

export default class ClientRepository {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = AppDataSource.getRepository(Client);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getAll(info: any): Promise<any> {
    const builder = this.clientRepository
      .createQueryBuilder()
      .orderBy("id", "DESC");

    return await Paginator.paginate(builder, info);
  }

  async save(
    name: string,
    email: string,
    password: string,
    cpf: string,
  ): Promise<Client> {
    const client = this.clientRepository.create({ name, email, password, cpf });
    return this.clientRepository.save(client);
  }

  async get(id: number): Promise<Client> {
    const client = await this.clientRepository.findOneBy({ id });
    if (!client) {
      throw new Error("client not found");
    }

    return client;
  }

  async update(
    id: number,
    name: string,
    password: string,
    cpf: string,
  ): Promise<Client> {
    const client = await this.clientRepository.findOneBy({ id });
    if (!client) {
      throw new Error("client not found");
    }
    client.name = name;
    client.password = password;
    client.cpf = cpf;
    this.clientRepository.save(client);
    return client;
  }

  async destroy(id: number) {
    await this.clientRepository.delete(id);
  }
}
