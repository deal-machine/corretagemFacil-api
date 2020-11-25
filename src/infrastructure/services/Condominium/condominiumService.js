'use strict'

const axios = require('axios')

const Condominium = require('./Condominium')
const condominiumClass = new Condominium(axios)

async function queryCondominiums() {
  try {
    const condominiums = await condominiumClass.queryCondominium()
    console.log(condominiums)
  } catch (err) {
    console.error(err.message)
  }
}

queryCondominiums()