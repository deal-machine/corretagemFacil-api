'use strict'

const axios = require('axios')
const Installment = require('./Installment')
const installmentClass = new Installment(axios)

async function getInstallments(start, end) {
  try {
    const installments = await installmentClass.queryInstallments(start, end)
    console.log(installments)
  }
  catch (err) {
    console.error({ "Error ": err.message })
  }
}

getInstallments('01/01/2019', '30/11/2019')