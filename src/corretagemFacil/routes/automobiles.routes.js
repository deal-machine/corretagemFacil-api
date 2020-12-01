const axios = require('axios')

const Automobile = require('../services/Automobile/Automobile')

const automobileClass = new Automobile(axios)

async function createQuote(quoteOBJ) {
  try {

    //cria uma cotação
    const response = await automobileClass.createQuote(quoteOBJ);
    console.log(response)

    // //consulta cotação
    // const { data } = await axios.get('https://api.corretagemfacil-app.com.br/api/v1/quotes/84c05802974946a3612bbf396c3a656bac14b12f?token=cce2108e2f4cf8f3e4f86d68a40f3d1c8d2d271c', { headers: { Accept: '*/*' } })
    // console.log(data)

    // const { quote } = await automobileClass.queryBusiness('84c05802974946a3612bbf396c3a656bac14b12f');
    // console.log(quote)

    //dynamon sdk aws

  } catch (err) { console.error({ 'error': err }) }
}
const quoteOBJ = {
  "end_validity": "01/11/2020",
  "insurance_type_id": 1,
  "items": [
    {
      "mileage": 1000,
      "adjusted_value": "26.211,00",
      "bonus_type_id": null,
      "car_category_id": 1,
      "car_color_id": 3,
      "chassi": "",
      "chassis_changed": false,
      "city": "SÃO PAULO",
      "drivers": [
        {
          "cpf": null,
          "date_of_birth": null,
          "driver_type_id": 1,
          "license_date": null,
          "marital_status": null,
          "name": null,
          "sex": null
        }
      ],
      "fipe_code": "003286-7",
      "fuel_id": 5,
      "funded": false,
      "has_kit_gas": false,
      "has_shield": false,
      "has_shield_factory": false,
      "last_bonus_type_id": null,
      "license_plate": "",
      "license_plate_uf": "SP",
      "manufacture_year": 2012,
      "market_value": "26.211,00",
      "mode_type_id": 1,
      "model_year": 2012,
      "name": "FORD - FIESTA 1.6 8V FLEX/CLASS 1.6 8V FLEX 5P - 2012/2012",
      "percentage": 100,
      "profile": {
        "birth_dependent": null,
        "college_park_id": null,
        "crash_one_year": 0,
        "daily_mileage_value": 20,
        "dependent_id": 2,
        "dependent_sex_id": null,
        "dependent_vehicle_id": null,
        "driving_course_id": 76,
        "have_children_id": 79,
        "home_park_id": 17,
        "home_type_id": 37,
        "office_park_id": 20,
        "profession_id": 50,
        "same_municipal_id": 14,
        "sports_id": 70,
        "study_period_id": null,
        "theft_one_year": 0,
        "total_vehicles": 2,
        "use_college_id": 42,
        "use_work_id": 32,
        "vehicle_use_id": 6,
        "work_distance_value": 0,
        "zipcode_work": "04018-030"
      },
      "renavam": null,
      "zip_code_movement": "04018-030",
      "zip_code_overnight": "05591-010"
    }
  ],
  "payment_day_of_month": 25,
  "period_id": 1,
  "policy": null,
  "proponent": {
    "birth": "19/04/1981",
    "document": "325.994.108-86",
    "email": "teste@corretagemfacil.com.br",
    "license": "19/04/2001",
    "marital_state_id": "1",
    "mobile": "(11) 93907-1380",
    "name": "Samuel Barbosa",
    "owner": true,
    "owner_birth": null,
    "owner_document": null,
    "owner_license": null,
    "owner_marital_state_id": null,
    "owner_name": null,
    "owner_relation": null,
    "owner_sex": null,
    "phone": "(11) 3907-1380",
    "sex": "F",
    "sms": true,
    "type": "F",
    "zipcode": "04383-070"
  },
  "quote_renewal_type_id": null,
  "renewal_code": null,
  "renewal_company_id": null,
  "renewal_end_date": null,
  "renewal_same_broker": null,
  "renewal_same_driver": null,
  "start_validity": "01/10/2019",
  "sucursal": null
}

createQuote(quoteOBJ)

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
//         "birth_dependent": null,
//         "college_park_id": null,
//         "crash_one_year": 0,
//         "daily_mileage_value": 20,
//         "dependent_id": 2,
//         "dependent_sex_id": null,
//         "dependent_vehicle_id": null,
//         "driving_course_id": 76,
//         "have_children_id": 79,
//         "home_park_id": 17,
//         "home_type_id": 37,
//         "office_park_id": 20,
//         "profession_id": 50[professions],
//         "same_municipal_id": 14,
//         "sports_id": 70,
//         "study_period_id": null,
//         "theft_one_year": 0,
//         "total_vehicles": 2,
//         "use_college_id": 42,
//         "use_work_id": 32,
//         "vehicle_use_id": 6,
//         "work_distance_value": 0,
//         "zipcode_work": "04018-030"
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