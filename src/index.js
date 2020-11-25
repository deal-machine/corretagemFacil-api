'use strict'

const Automobile = require('./infrastructure/services/Automobile/Automobile');
const Commission = require('./infrastructure/services/Commission/Commission');
const Distribution = require('./infrastructure/services/Commission/Distribution');
const Condominium = require('./infrastructure/services/Condominium/Condominium');
const Domain = require('./infrastructure/services/Domain/Domain');
const Installment = require('./infrastructure/services/Installment/Installment');
const OtherBranch = require('./infrastructure/services/OtherBranch/OtherBranch');
const RealEstate = require('./infrastructure/services/RealEstate/RealEstate');
const Residential = require('./infrastructure/services/Residential/Residential');
const Travel = require('./infrastructure/services/Travel/Travel');
const Vehicle = require('./infrastructure/services/Vehicle/Vehicle');

module.exports = {
  Automobile,
  Commission,
  Distribution,
  Condominium,
  Domain,
  Installment,
  OtherBranch,
  RealEstate,
  Residential,
  Travel,
  Vehicle
}