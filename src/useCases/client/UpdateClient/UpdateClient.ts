import ClientRepository from "@repositories/ClientRepository/ClientRepository";
import UpdateClientDTO from "./UpdateClientDTO";

export default class UpdateClient {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(id: number, name: string, cpf: string, password: string) {
    const client = await this.repository.get(id);
    if (!client) {
      throw new Error("client not found");
    }
    const dto = new UpdateClientDTO();
    dto.name = name;
    dto.password = password;
    dto.cpf = cpf;
    client.name = dto.name;
    client.password = dto.password;
    client.cpf = dto.cpf;
    return await this.repository.update(
      client.id,
      client.name,
      client.password,
      client.cpf,
    );
  }
}
