'use strict'

const axios = require('axios')
const Residential = require('./Residential')
const residentialClass = new Residential(axios)

async function getResidentials() {
  const residentials = await residentialClass.getResidentials();
  console.log(residentials)
}
async function getResidentialsByCPF(cpf) {
  const residentials = await residentialClass.getResidentialsByCPF(cpf);
  console.log(residentials)
}
async function getResidentialsByCNPJ(cnpj) {
  const residentials = await residentialClass.getResidentialsByCNPJ(cnpj);
  console.log(residentials)
}
async function queryResidential(id) {
  const residential = await residentialClass.queryResidential(id);
  console.log(residential)
}

// getResidentials();
//getResidentialsByCPF('32436527822')
// getResidentialsByCNPJ('')
// queryResidential('928167003691c3952af6a0121d68ed69f88614d5');