'use strict'

const axios = require('axios')

const Vehicle = require('./Vehicle')
const vehicle = new Vehicle(axios)

async function getFacturer() {
  try {

    const vehicles = await vehicle.getVehicleByFacturer();
    console.log(vehicles)
  }
  catch (err) {
    console.error({ "ERROR": err.message })
  }
}

getFacturer()
/**{
        params: {
          token: token,
          ano_fabricacao: '2012',
          ano_model: '2012',
          cod_fabricante: '193',
          texto: 'fiesta'
        }
      } */