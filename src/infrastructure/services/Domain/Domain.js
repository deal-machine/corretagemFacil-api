'use strict'

const { base_url, config } = require('../../http/api')

module.exports = class Domain {
  _httpClient
  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async queryDomain() {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/domain`, config)
    return data
  }

}