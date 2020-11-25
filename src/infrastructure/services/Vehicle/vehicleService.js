'use strict'

const axios = require('axios')

const Vehicle = require('./Vehicle')
const vehicleClass = new Vehicle(axios)

async function getFacturer() {
  try {

    const vehicles = await vehicle.getVehicleByFacturer();
    console.log(vehicles)
  }
  catch (err) {
    console.error({ "ERROR": err })
  }
}

async function getVehicleByFipe(fipe) {
  try {
    const vehicle = await vehicleClass.getVehicleByFipe(fipe);
    console.log(vehicle)
  }
  catch (err) {
    console.error({ "Error -> ": err.message })
  }
}

async function getVehicleByName(manufacturingYear, modelYear, manufacturerCode, name) {
  try {
    const vehicle = await vehicleClass.getVehiclesByName(manufacturingYear, modelYear, manufacturerCode, name)
    console.log(vehicle)

  } catch (err) {
    console.error({ "ERROR": err })
  }
}

//getVehicleByName('2013', '2013', '296', 'intruder')

// getVehicleByFipe('014050-3')
