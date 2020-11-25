'use strict'

const axios = require('axios')

const Commission = require('./Commission')
const commissionClass = new Commission(axios)

const Distribution = require('./Distribution');
const distributionClass = new Distribution(axios)

async function queryCommissions(start, end) {
  try {
    const commissions = await commissionClass.queryCommissions(start, end);
    console.log(commissions)
  } catch (err) {
    console.error({ "Error": err.message })
  }
}
//queryCommissions('01/01/2020', '31/12/2020')

async function queryDistributions(start, end) {
  try {
    const distributions = await distributionClass.queryDistributions(start, end);
    console.log(distributions)

  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}
queryDistributions('01/01/2019', '31/12/2019')