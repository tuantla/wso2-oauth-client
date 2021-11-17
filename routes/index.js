var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.sessionOptions)
  res.send('Fake-Rest API for testing');
});

module.exports = router;
