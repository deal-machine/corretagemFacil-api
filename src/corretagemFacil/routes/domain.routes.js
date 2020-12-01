const axios = require('axios')

const Domain = require('../services/Domain/Domain');

const domainClass = new Domain(axios)

async function getDomain() {
  try {

    //consulta dominio
    const domain = await domainClass.queryDomain();
    console.log(domain)
    //dynamon sdk aws

  } catch (err) { console.error({ 'error': err }) }
}

getDomain()