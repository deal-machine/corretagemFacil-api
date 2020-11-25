'use strict'

const axios = require('axios')
const Commission = require('./Commission')
const commissionClass = new Commission(axios)

async function queryCommissions(start, end) {
  try {
    const commissions = await commissionClass.queryCommissions(start, end);
    console.log(commissions)
  } catch (err) {
    console.error({ "Error": err.message })
  }
}
queryCommissions('01/01/2020', '31/12/2020')