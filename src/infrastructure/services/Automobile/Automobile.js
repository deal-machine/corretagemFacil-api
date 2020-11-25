'use strict'

const { base_url, token: apiToken, config } = require('../../http/api')

module.exports = class Automobile {
  _httpClient
  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getAutomobiles() {
    const data = await this._httpClient.get(`${base_url}/api/v1/quotes`, { params: { token: apiToken } });
    return data;
  }

  async getAutomobilesByCPF(cpfDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/quotes`, { params: { token: apiToken, cpf: cpfDto } });
    return data;
  }

  async getAutomobilesByCNPJ(cnpjDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/quotes`, { params: { token: apiToken, cnpj: cnpjDto } });
    return data;
  }

  async getProposalDomain() {
    const data = await this._httpClient.get(`${base_url}/api/v1/quotes/proposal_domain`, { params: { result_id: 86972, token: apiToken } });
    return data;
  }

  async createQuote(quoteDto) {
    const data = await this._httpClient.post(`${base_url}/api/v1/quotes`,
      { quote: quoteDto, token: apiToken }
      , config
    );
    return data;
  }
}