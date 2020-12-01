'use strict'

const { base_url, token, config } = require('../../http/api')

module.exports = class Vehicle {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  //manufacturingYear = ano de fabricação
  //modelYear = ano modelo
  //manufacturerCode = codigo do fabricante
  //name = nome do veiculo

  async getVehiclesByName(manufacturingYear, modelYear, manufacturerCode, name) {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/vehicles/show?token=${token}&ano_fabricacao=${manufacturingYear}&ano_model=${modelYear}&cod_fabricante=${manufacturerCode}&texto=${name}`, config)
    return data;
  };

  async getVehicleByFipe(fipeDto) {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/vehicles/fipe?token=${token}&fipe=${fipeDto}`, config);
    return data;
  }

  async getVehicleByFacturer() {
    const { data } = await this._httpClient.get(`${base_url}/api/v1/vehicles/automaker?token=${token}`, config);
    return data;
  }
}