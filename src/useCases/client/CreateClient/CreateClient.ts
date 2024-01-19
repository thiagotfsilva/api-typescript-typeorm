import ClientRepository from "@repositories/ClientRepository/ClientRepository";
import CreateClientDTO from "./dto/CreateClientDTO";
import Client from "@entities/client/Client";

export default class CreateClient {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute({
    name,
    email,
    password,
    cpf,
  }: CreateClientDTO): Promise<Client> {
    const client = new CreateClientDTO();
    client.name = name;
    client.email = email;
    client.password = password;
    client.cpf = cpf;

    const newClient = await this.repository.save(
      client.name,
      client.email,
      client.password,
      client.cpf,
    );

    return newClient;
  }
}
