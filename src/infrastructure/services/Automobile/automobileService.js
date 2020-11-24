'use strict'

const axios = require('axios')
const Automobile = require('./Automobile')
const automobileClass = new Automobile(axios)

async function getAutomobiles() {
  const automobiles = await automobileClass.getAutomobiles();
  console.log(automobiles)
}

async function getAutomobilesByCPF(cpf) {
  const automobiles = await automobileClass.getAutomobilesByCPF(cpf);
  console.log(automobiles)
}

async function getAutomobilesByCNPJ(cnpj) {
  const automobiles = await automobileClass.getAutomobilesByCNPJ(cnpj);
  console.log(automobiles)
}

async function getProposalDomain() {
  const domains = await automobileClass.getProposalDomain();
  console.log(domains)
}
// getAutomobilesByCPF('21963540824');
// getAutomobilesByCNPJ('78747754000105');
// getProposalDomain()
getAutomobiles()