'use strict'

const axios = require('axios')

const Domain = require('./Domain')
const domainClass = new Domain(axios)

async function getDomains() {
  const domains = await domainClass.queryDomain();
  console.log(domains)
}


//getDomains();