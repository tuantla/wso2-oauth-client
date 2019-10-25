var express = require('express');
var router = express.Router();


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
  console.log(JSON.stringify({header: req.headers, body: req.body}));

  return res.send(JSON.stringify(ingestResponse));
});


router.post('/jwt-generate', (req, res) => {
  console.log(JSON.stringify({header: req.headers, body: req.body}));
  return res.send(JSON.stringify(jwt));
});


module.exports = router;
