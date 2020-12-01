'use strict'

const { base_url, token } = require('../../http/api')

module.exports = class Domain {
  _httpClient
  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async queryDomain() {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/domain`, {
      headers: {
        'token': token
      }
    });
    return data[0].product;
  }
}