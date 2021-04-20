var express = require('express');
var uuid = require('uuid')
var router = express.Router();


router.get('/authorize', function(req, res) {
  let query = 'code=c0fa366c-2902-4b2c-933d-d1b6cfe8cd6e&id_token=116548a0-868e-49a8-a14e-c6b38be7fae9&state=eyJub25jZSI6IiIsInJlUmVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiYWNjUmVxIjoiMWNkNmUxNjItOTAxMS00ZDNiLThiZWYtZGJiZTAwYTRhYWJjIiwiYklkIjoyMywiY29uc2VudElkIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SkpUbE5VU1ZSVlZFbFBUaUk2SW1oelltTmlkWE5wYm1WemMxOTFheUlzSWtOUFRsTkZUbFFpT2lJd01ERTNNR1k0TVMwNU56YzRMVFExT0RRdE9XWmlOeTB4TXpFMU1EQTNOVGs0TmpjaUxDSkJVRkJNU1VOQlZFbFBUbDlWVTBWU1gwbEVJam9pTlRkaE5tWmlORFF0TVdVeVpTMDBNR1V5TFdJMVpHWXRNbVprTWpVM1l6QTNObVJqSWl3aVZWTkZVaUk2SW1ReVkyWTBOVFJsTFRjeU5tTXROR1JpTnkxaE1qQmtMV1F3WmpZd01EZzBPV1UxWWlKOS5JOEdtZENtX293R2N5QUptSjBVTENjWnZMSG5rQWloWG52TGdPal9wXzRqMndSOXIyalh6RWxBOWZ3WGVvTkRlM1EtMFAwbzlNSVRLWUp5TEhGV1ZudyJ9'
  res.send(`
  <html>
  <head>
    <script type="text/javascript">
    var redirectTo = function(url) {
      window.location.replace(url+'?${query}')
    }
    </script>
  </head>
  <body>
    <form name ="frm" >
      <input name ="redirectUrl" style="width:300px" type = "text" value= "http://localhost:4000/fractal-checkout.html"/>
      <input type = "button" value = "authorize" onclick="redirectTo(document.frm.redirectUrl.value)" />
    </form>
  </body>
  </html>
  `)
})

router.post('/payment/:bankId', (req,res) => {
  let jsonData = {
    "id": uuid.v1(),
    "consentId": uuid.v1(),
    "bankId": req.params.bankId,
    "type": "DOMESTIC",
    "status": "PENDING",
    "amount": "25.00",
    "currency": "GBP",
    "reference": "reference",
    "creditor": {
      "SchemeName": "UK.OBIE.SortCodeAccountNumber",
      "Identification": "11223301234567",
      "Name": "Creditor name"
    },
    "creationDate": "2020-10-27T10:02:37Z",
    "remittanceInfo": req.headers['x-partner-id']
  }

  res.json(jsonData)

})


module.exports = router;
