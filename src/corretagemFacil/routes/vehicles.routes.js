const axios = require('axios')
const { Router } = require('express')


const Vehicle = require('../services/Vehicle/Vehicle')
const vehicleClass = new Vehicle(axios)

const vehiclesRouter = Router();

vehiclesRouter.get('/', async (request, response) => {
  try {

    const { ano_fabricacao, ano_modelo, codigo_fabricante, texto } = request.body;


    //consulta veiculo (ano fabricação / ano modelo / codigo do fabricante / texto
    const vehicles = await vehicleClass.getVehiclesByName(ano_fabricacao, ano_modelo, codigo_fabricante, texto);


    return response.json(vehicles)

  } catch (err) { console.error({ 'error': err }) }

})

module.exports = vehiclesRouter;
