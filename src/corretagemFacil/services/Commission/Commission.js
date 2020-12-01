'use strict'

const { base_url, token: apiToken } = require('../../http/api')

module.exports = class Commission {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async queryCommissions(start, end) {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/commissions`,
      {
        params:
          { token: apiToken, start_at: start, end_at: end }
      });
    return data;
  }
}