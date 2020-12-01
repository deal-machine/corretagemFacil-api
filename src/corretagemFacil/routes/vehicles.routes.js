const axios = require('axios')
const { Router } = require('express')


const Vehicle = require('../services/Vehicle/Vehicle')
const vehicleClass = new Vehicle(axios)

const vehiclesRouter = Router();

vehiclesRouter.get('/', async (request, response) => {
  try {

    //consulta codigo do fabricante
    // const manufacturers = await vehicleClass.getVehicleByFacturer();
    // const name = 'suzuki';
    // const manufacturer = manufacturers.filter(manu => manu.fipe === name.toUpperCase())
    // console.log(manufacturer)

    //consulta veiculo (ano fabricação / ano modelo / codigo do fabricante / texto
    const vehicles = await vehicleClass.getVehiclesByName('2007', '2007', '193', 'fiesta');

    return response.json(vehicles)
    //dynamon sdk aws

  } catch (err) { console.error({ 'error': err }) }

})

module.exports = vehiclesRouter;
