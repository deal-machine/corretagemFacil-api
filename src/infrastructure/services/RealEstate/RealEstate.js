'use strict'

const { base_url, token: apiToken } = require('../../http/api')

module.exports = class RealEstate {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getRealEstate() {
    const data = await this._httpClient.get(`${base_url}/api/v1/real_state`, { params: { token: apiToken } });
    return data;
  }

  async queryRealEstate(id) {
    const data = await this._httpClient.get(`${base_url}/api/v1/real_state/${id}`, { params: { token: apiToken } });
    return data;
  }


}