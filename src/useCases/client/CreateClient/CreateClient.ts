import ClientRepository from "../../../repositories/ClientRepository/ClientRepository";
import Client from "../../../entities/client/Client";
import CreateClientDTO from "./CreateClientDTO";
import bcrypt from "bcrypt";

export default class CreateClient {
  private repository: ClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(data: CreateClientDTO): Promise<Client> {
    try {
      const client = new CreateClientDTO();
      const hashPassowrd = await bcrypt.hash(data.password, 12);
      client.name = data.name;
      client.email = data.email;
      client.password = hashPassowrd;
      client.cpf = data.cpf;
      return this.repository.save(
        client.name,
        client.email,
        client.password,
        client.cpf
      );
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
}
