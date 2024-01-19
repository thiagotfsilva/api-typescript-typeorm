import axios, { AxiosResponse, RawAxiosRequestConfig } from "axios";

interface RequestConfig extends RawAxiosRequestConfig {}
interface Response<T = any> extends AxiosResponse<T> {}

interface RequestViaCep {
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

class ClientHttp {
  constructor(private request = axios) {}

  public get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return this.request.get<T>(url, config);
  }
}

export class ViaCepClient {
  constructor(protected clientZipCode = new ClientHttp()) {}

  async getAddress(zipCode: string) {
    const { data } = await this.clientZipCode.get<RequestViaCep>(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );
    return data;
  }
}
