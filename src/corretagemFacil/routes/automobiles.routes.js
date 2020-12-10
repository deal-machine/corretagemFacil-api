const { Router } = require('express')
const axios = require('axios')

const Automobile = require('../services/Automobile/Automobile')
const automobileClass = new Automobile(axios)
const Quote = require('../models/Quote')

const automobilesRouter = Router();

automobilesRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const quote = await Quote.get(parseInt(id));

    //consulta cotação
    const { data } = await axios
      .get(quote.link,
        { headers: { Accept: '*/*' } })


    return response.json(data)

  } catch (err) { console.error({ 'error': err }) }

})

automobilesRouter.get('/', async (request, response) => {
  try {

    const quotes = await Quote.scan().exec();

    return response.json({ quotes });
  }
  catch (err) { response.json({ "ERROR ": err.message }) }
})

automobilesRouter.post('/', async (request, response) => {
  try {

    const quoteDto = request.body;

    const quote = await automobileClass.createQuote(quoteDto);

    if (quote.status === 200) {

      const newQuote = await Quote.create({
        "id": quote.quote_id,
        "link": quote.link,
      })

      console.log("Operation was successful");

      return response.json(newQuote)
    }

  } catch (err) { response.json({ 'error': err }) }

})

module.exports = automobilesRouter;

// const quoteObj =
// {
//   "end_validity": "01/11/2020",
//   "insurance_type_id": [insurance_types],
//   "items": [
//     {
//       "mileage": 1000,
//       "adjusted_value": "26.211,00",
//       "bonus_type_id": null,
//       "car_category_id": [car_categories],
//       "car_color_id": [car_colors],
//       "chassi": "",
//       "chassis_changed": false,
//       "city": "SÃO PAULO",
//       "drivers": [
//         {
//           "cpf": null,
//           "date_of_birth": null,
//           "driver_type_id": [driver_types],
//           "license_date": null,
//           "marital_status": null,
//           "name": null,
//           "sex": null
//         }
//       ],
//       "fipe_code": [vehicles],
//       "fuel_id": [fuels],
//       "funded": false,
//       "has_kit_gas": false,
//       "has_shield": false,
//       "has_shield_factory": false,
//       "last_bonus_type_id": null,
//       "license_plate": "",
//       "license_plate_uf": "SP",
//       "manufacture_year": [vehicle],
//       "market_value": [vehicle][value],
//       "mode_type_id": [mode_types],
//       "model_year": [vehicle],
//       "name": [vehicle],
//       "percentage": 100,
//       "profile": {
        // "birth_dependent": null,
        // "college_park_id": null,
        // "crash_one_year": 0,
        // "daily_mileage_value": 20,
        // "dependent_id": 2,
        // "dependent_sex_id": null,
        // "dependent_vehicle_id": null,
        // "driving_course_id": 76,
        // "have_children_id": 79,
        // "home_park_id": 17,
        // "home_type_id": 37,
        // "office_park_id": 20,
        // "profession_id": 50[professions],
        // "same_municipal_id": 14,
        // "sports_id": 70,
        // "study_period_id": null,
        // "theft_one_year": 0,
        // "total_vehicles": 2,
        // "use_college_id": 42,
        // "use_work_id": 32,
        // "vehicle_use_id": 6,
        // "work_distance_value": 0,
        // "zipcode_work": "04018-030"
//       },
//       "renavam": null,
//       "zip_code_movement": "04018-030",
//       "zip_code_overnight": "05591-010"
//     }
//   ],
//   "payment_day_of_month": 25,
//   "period_id": 1,
//   "policy": null,
//   "proponent": {
//     "birth": "19/04/1981",
//     "document": "325.994.108-86",
//     "email": "teste@corretagemfacil.com.br",
//     "license": "19/04/2001",
//     "marital_state_id": "1",
//     "mobile": "(11) 93907-1380",
//     "name": "Samuel Barbosa",
//     "owner": true,
//     "owner_birth": null,
//     "owner_document": null,
//     "owner_license": null,
//     "owner_marital_state_id": null,
//     "owner_name": null,
//     "owner_relation": null,
//     "owner_sex": null,
//     "phone": "(11) 3907-1380",
//     "sex": "F",
//     "sms": true,
//     "type": "F",
//     "zipcode": "04383-070"
//   },
//   "quote_renewal_type_id": [renewal_types],
//   "renewal_code": null[renewal_companies],
//   "renewal_company_id": null[renewal_companies],
//   "renewal_end_date": null,
//   "renewal_same_broker": null,
//   "renewal_same_driver": null,
//   "start_validity": "01/10/2019",
//   "sucursal": null
// }