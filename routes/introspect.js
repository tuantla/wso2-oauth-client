var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {

  let rawJWT = req.headers['x-jwt-assertion'].split(".")

  let buff = Buffer.from(rawJWT[1], 'base64');
  let jsonJWT = buff.toString('utf8');

  res.set('x-real-ip', req.headers['x-real-ip']);
  res.set('rawJWT', rawJWT);

  res.json(JSON.parse(jsonJWT))
});


module.exports = router;
