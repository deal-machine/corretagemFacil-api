'use strict'

const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
  "accessKeyId": "AKIAROKI4CKMQRNWNRYP",
  "secretAccessKey": "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",
  "region": "sa-east-1"
});

dynamoose.aws.ddb.local("http://localhost:8000");

const quoteSchema = dynamoose.model("Quote", {
  "id": Number,
  "link": String,
});

module.exports = quoteSchema;