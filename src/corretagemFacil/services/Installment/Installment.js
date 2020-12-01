'use strict';

const { base_url, token: apiToken, config } = require('../../http/api');

module.exports = class Installment {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async queryInstallments(start, end) {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/installments`,
      {
        params:
          { token: apiToken, start_at: start, end_at: end }
      }, config)
    return data;
  }
}