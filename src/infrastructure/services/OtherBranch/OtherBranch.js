'use strict'

const { base_url, token: apiToken } = require('../../http/api')

module.exports = class OtherBranch {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getOtherBranches() {
    const data = await this._httpClient.get(`${base_url}/api/v1/general_quotes`, { params: { token: apiToken } });
    return data;
  }

  async getOtherBranchesByCPF(cpfDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/general_quotes`, { params: { token: apiToken, cpf: cpfDto } });
    return data;
  }

  async getOtherBranchesByCNPJ(cnpjDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/general_quotes`, { params: { token: apiToken, cnpj: cnpjDto } });
    return data;
  }

  async queryOtherBranch(id) {
    const data = await this._httpClient.get(`${base_url}/api/v1/general_quotes/${id}`, { params: { token: apiToken } });
    return data;
  }
}