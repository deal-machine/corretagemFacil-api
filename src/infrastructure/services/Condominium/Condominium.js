'use strict'

const { base_url, token: apiToken } = require('../../http/api')

module.exports = class Condominium {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getCondominium(id) {
    const data = await this._httpClient.get(`${base_url}/api/v1/condominium/${id}`,
      {
        params:
          { token: apiToken }
      });
    return data;
  }

  async listCondominiums() {
    const data = await this._httpClient.get(`${base_url}/api/v1/condominium`, { params: { token: apiToken } });
    return data;
  }

  async listCondominiumByCNPJ(cnpjDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/condominium`,
      {
        params:
          { token: apiToken, cnpj: cnpjDto }
      });
    return data;
  }

  async queryDomainCondominium() {
    const data = await this._httpClient.get(`${base_url}/api/v1/condominium/domain`,
      {
        params:
          { token: apiToken }
      });
    return data;
  }
}

