import ClientRepository from "../../../repositories/ClientRepository/ClientRepository";
import UpdateClientDTO from "./UpdateClientDTO";

export default class UpdateClient {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  /* async execute(id: number, data: UpdateClientDTO) {
    const client = await this.repository.get(id);
    if (!client) {
      throw new Error("client not found");
    }
    const dto = new UpdateClientDTO();
    dto.name = data.name;
    dto.password = data.password;
    dto.cpf = data.cpf
    client.name = dto.name;
    client.password = dto.password;
    client.cpf = dto.cpf;
    return await this.repository.save(
      client.name,
      client.email,
      client.password,
      client.cpf
    );
  } */
}
