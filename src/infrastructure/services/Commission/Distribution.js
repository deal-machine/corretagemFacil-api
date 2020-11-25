'use strict'

const { base_url, token } = require('../../http/api')

//Distribution Of Commission
module.exports = class Distribution {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async queryDistributions(start, end) {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/distributions`,
      {
        params: {
          token,
          start_at: start,
          end_at: end
        }
      });
    return data
  }
}