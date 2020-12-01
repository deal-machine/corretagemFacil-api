'use strict'

const { base_url, token: apiToken } = require('../../http/api')

module.exports = class Travel {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }
  async getTravels() {
    const data = await this._httpClient.get(`${base_url}/api/v1/travels`, { params: { token: apiToken } });
    return data;
  }

  async getTravelsByCPF(cpfDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/travels`, { params: { token: apiToken, cpf: cpfDto } });
    return data;
  }

  async queryTravel(id) {
    const data = await this._httpClient.get(`${base_url}/api/v1/travels/${id}`, { params: { token: apiToken } });
    return data;
  }

  async createTravel(travelDto) {
    const data = await this._httpClient.post(`${base_url}/api/v1/travels`,
      { token: apiToken, travel: travelDto });
    return data;
  }

}