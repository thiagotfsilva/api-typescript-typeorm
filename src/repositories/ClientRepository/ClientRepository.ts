import { Paginator } from "../../database/Paginator";
import { AppDataSource } from "../../database/data-source";
import Client from "../../entities/client/Client";
import { Repository } from "typeorm";

export default class ClientRepository {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = AppDataSource.getRepository(Client);
  }

  async getAll(info: any): Promise<any>{
    const builder =  this.clientRepository.createQueryBuilder()
      .orderBy("id", "DESC");

    return await Paginator.paginate(builder, info); 
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
    const client = await this.clientRepository.findOneBy({ id });
    if (!client) {
      throw new Error("client not found");
    };

    return client;
  }

  async destroy(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
