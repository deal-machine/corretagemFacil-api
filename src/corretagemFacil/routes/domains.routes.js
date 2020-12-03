const axios = require('axios')

const { Router } = require('express')

const Domain = require('../services/Domain/Domain');
const domainClass = new Domain(axios)

const domainRouter = Router();

domainRouter.get('/', async (request, response) => {
  try {

    const domain = await domainClass.queryDomain();

    return response.json(domain)

  } catch (err) { console.error({ 'error': err }) }

});

module.exports = domainRouter;