import Address from "@entities/address/Address";
import Client from "@entities/client/Client";
import { AppDataSource } from "src/database/data-source";
import { Repository } from "typeorm";

export default class AddressRepository {
  private addressRepository: Repository<Address>;

  constructor() {
    this.addressRepository = AppDataSource.getRepository(Address);
  }

  async save(
    client: Client,
    state: string,
    district: string,
    city: string,
    number: number,
    zipCode: string,
    complement: string,
  ) {
    const address = this.addressRepository.create({
      client,
      state,
      district,
      city,
      number,
      zipCode,
      complement,
    });
    return this.addressRepository.save(address);
  }
}
