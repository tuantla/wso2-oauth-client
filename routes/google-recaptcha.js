var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render("recaptcha/index",{message:'success'})
});


module.exports = router;
