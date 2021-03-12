var express = require('express');
var router = express.Router();

const paymentResponse = {
  "data": {
    "type": "Payment",
    "id": "02807433-b0ee-425a-a5cc-654a2037b49b",
    "attributes": {
      "pspIdentifier": "adyen",
      "paymentMethod": "CARD_PAYMENT",
      "status": "Authorised",
      "paymentReference": "8290223355",
      "documentDate": "2021-01-19T04:34:06.070Z",
      "paidAmount": {
        "amount": 14.86,
        "currency": "AUD"
      },
      "connectReference": "AU01-Invoice-9030000863",
      "connectDocumentType": "Invoice",
      "connectDocumentId": "bcQ2AEh5G4UMKZSrPkeIHw"
    },
    "relationships": {
      "user": {
        "data": {
          "type": "User",
          "id": "5bcQ2AEh345G4UMKZSrPkeIHw345"
        }
      }
    }
  }
}


router.post('/payments', function(req, res) {
  res.json(paymentRespponse)
})

router.patch('/payments/:id', function(req, res) {
  let respPayload = Object.assign({}, paymentResponse)
  respPayload.data.id = req.params.id,
  res.json(respPayload)
})

router.get('/payments/:id', function(req, res) {
  res.json({})
})


module.exports = router;
