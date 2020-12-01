'use strict'

const { base_url, token, config } = require('../../http/api')

module.exports = class Automobile {
  _httpClient
  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getAutomobiles() {
    const data = await this._httpClient.get(`${base_url}/api/v1/quotes`, { params: { token } });
    return data;
  }

  async queryBusiness(id) {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/quotes/${id}?token=${token}`, config);
    return data;
  }

  async getAutomobilesByCPF(cpfDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/quotes`, { params: { token, cpf: cpfDto } });
    return data;
  }

  async getAutomobilesByCNPJ(cnpjDto) {
    const data = await this._httpClient.get(`${base_url}/api/v1/quotes`, { params: { token, cnpj: cnpjDto } });
    return data;
  }

  async getProposalDomain() {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/quotes/proposal_domain`, { params: { result_id: 86972, token } });
    return data;
  }

  async createQuote(quoteDto) {
    const { data } = await this._httpClient.post(`${base_url}/api/v1/quotes`,
      { quote: quoteDto, token }
      , config
    );
    return data;
  }
}