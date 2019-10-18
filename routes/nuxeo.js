var express = require('express');
var router = express.Router();
const loggly = require('./log')

router.get('/', function(req, res) {
  res.send('respond with a resource');
});


let ingestResponse = {
  "uid": "a4a93bf0-15c6-47e9-9483-ba3f26cd5ebf",
  "state": "PUBLISHED"
}

router.post('/ingest', (req, res) => {
  console.log("headers: >> " + JSON.stringify(req.headers));
  console.log("body: >> " + JSON.stringify(req.body))
  loggly.log("headers:" + JSON.stringify(req.headers) + ", body:" + JSON.stringify(req.body))
  return res.send(JSON.stringify(ingestResponse));
});


module.exports = router;
