const fetch = require('node-fetch');
const toUpperCase = require('./lib/toUpperCase');

exports.toUpperCaseArray = str => {
  return [...toUpperCase(str)];
};

exports.getLaboratoriaApiVersion = () => fetch('https://api.laboratoria.la/')
  .then(resp => resp.json())
  .then(json => json.version);