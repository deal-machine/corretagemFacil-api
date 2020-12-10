'use strict'
require('../http/aws');

const dynamoose = require('dynamoose');

const quoteSchema = dynamoose.model("Quote", {
  "id": Number,
  "link": String,
});

module.exports = quoteSchema;