var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res) {
  res.json({
    "data": {
      "type": "InvoiceAccountNoteView",
      "id": req.params.id,
      "attributes": {
        "number": "9030000863",
        "type": "Invoice",
        "issueDate": "2020-07-29T16:00:00.000000Z",
        "dueDate": "2020-09-02",
        "amount": {
          "amount": 200,
          "currency": "AUD"
        },
        "purchaseOrderNumber": "IM-016",
        "paymentTerms": "32 days end of month by 2nd",
        "status": "Open"
      },
      "relationships": {
        "delivery": {
          "data": {
            "type": "Delivery",
            "id": "m8PGdI987G7QqfNbaTZeKg"
          }
        }
      }
    },
    "included": [
      {
        "type": "Delivery",
        "id": "m8PGdI987G7QqfNbaTZeKg",
        "attributes": {
          "number": "0080006006",
          "deliveryDate": "2020-07-30"
        },
        "relationships": {
          "order": {
            "data": {
              "type": "Order",
              "id": "YMq9y22ijcGYrfhCiJF9tA"
            }
          },
          "invoices": {
            "data": []
          },
          "batches": {
            "data": []
          }
        }
      },
      {
        "type": "Order",
        "id": "YMq9y22ijcGYrfhCiJF9tA",
        "attributes": {
          "quotationNumber": "0020006526",
          "salesOrderNumber": "0030008486",
          "purchaseOrderNumber": "IM-016",
          "requestedDeliveryDate": "2020-09-01",
          "orderCreationDate": "2020-07-30T07:13:59.504000Z",
          "lastUpdateDate": "2021-01-18T07:50:15.573539Z",
          "status": "Closed",
          "commentFromUser": "testing sprint 14 changes e-to-e.\npls proceed",
          "totalValue": {
            "amount": 59886,
            "currency": "AUD"
          },
          "paymentTerms": "32 days end of month by 2nd",
          "shippingInstructions": ""
        },
        "relationships": {
          "orderLines": {
            "data": []
          },
          "customerContext": {
            "data": {
              "type": "CustomerContext",
              "id": "kmb--j8pRmh9-cUfxtaBoQ"
            }
          },
          "soldTo": {
            "data": {
              "type": "Location",
              "id": "4mpCLCaAVka6WhBu-37EnQ"
            }
          },
          "shipTo": {
            "data": {
              "type": "Location",
              "id": "jg3GirrLXsvJV977sD-orw"
            }
          },
          "billTo": {
            "data": {
              "type": "Location",
              "id": "WIdJOSmRaeLqAzNxzJcWJA"
            }
          },
          "deliveries": {
            "data": []
          }
        }
      },
      {
        "type": "SalesGroup",
        "id": "7UtsSSzglvdZWggqTymrpA",
        "attributes": {
          "name": "Brenntag Australia",
          "salesOrganization": "AU01",
          "distributionChannel": "AU",
          "division": "00"
        }
      },
      {
        "type": "CustomerContext",
        "id": "kmb--j8pRmh9-cUfxtaBoQ",
        "attributes": {
          "customerNumber": "0010001922",
          "customerName": "FONTERRA AUSTRALIA PTY LTD",
          "vatNumber": "52006483665",
          "incoTerms": "DDP;AT CUSTOMER PLACE",
          "paymentTerms": "32 days end of month by 2nd",
          "isActive": true
        },
        "relationships": {
          "salesGroup": {
            "data": {
              "type": "SalesGroup",
              "id": "7UtsSSzglvdZWggqTymrpA"
            }
          },
          "customerContextSpecificProducts": {
            "data": []
          },
          "locations": {
            "data": []
          },
          "customerContextProducts": {
            "data": []
          }
        }
      }
    ]
  });
});


module.exports = router;
