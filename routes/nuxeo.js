var express = require('express');
var router = express.Router();

var logger = require('./log').logger;

router.get('/', function(req, res) {
  res.send('respond with a resource');
});


let ingestResponse = {
  "uid": "a4a93bf0-15c6-47e9-9483-ba3f26cd5ebf",
  "state": "PUBLISHED"
}

let vaultToken= {
  jwt: "Bearer token============"
}

router.post('/ingest', (req, res) => {
   return res.json(ingestResponse);
});


router.post('/jwt-generate', (req, res) => {
  return res.json(vaultToken)
});


module.exports = router;
