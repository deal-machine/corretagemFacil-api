'use strict'

const { base_url, token: apiToken } = require('../../http/api')

module.exports = class Residential {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getResidentials() {
    const data = await this._httpClient.get(`${base_url}/api/v1/residentials`, { params: { token: apiToken } });
    return data
  }

  async getResidentialsByCPF(cpfDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/residentials`, { params: { token: apiToken, cpf: cpfDto } });
    return data;
  }

  async getResidentialsByCNPJ(cnpjDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/residentials`, { params: { token: apiToken, cnpj: cnpjDto } });
    return data;
  }

  async queryResidential(id) {
    const data = await this._httpClient.get(`${base_url}/api/v1/residentials/${id}`, { params: { token: apiToken } });
    return data;
  }

  async createResidential(residentialDto) {
    const data = await this._httpClient.post(`${base_url}/api/v1/residentials`,
      { residential: residentialDto, token: apiToken }
    );
    return data;
  }

}