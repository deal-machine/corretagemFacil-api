'use strict'

const axios = require('axios')

const Domain = require('./Domain')
const domainClass = new Domain(axios)

async function getDomains() {
  try {

    const domains = await domainClass.queryDomain();
    console.log(domains)
  } catch (err) {
    console.error(err)
  }
}


getDomains();