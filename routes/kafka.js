var express = require('express');
const kafka = require('kafka-node')
var uuid = require('uuid')

var router = express.Router();

const kafkaClient = new kafka.KafkaClient({kafkaHost:'kafka:9092'});
const kafkaProducer = new kafka.Producer(kafkaClient);
kafkaProducer.on('ready', () => {
  console.log('kafka ready');
}).on('error', (err) => {
  console.error(err);
});



router.post('/', (req, res) => {

  let payloads = [{topic: req.headers['x-topic-name'],
                  messages: [new kafka.KeyedMessage(uuid.v1(), JSON.stringify(req.body))], partition: 0}]

  kafkaProducer.send(payloads, (error, data) => {
     if (!error) {
      res.status(204).send({})
     } else {
      res.status(500).send(error)
     }
  })

})


module.exports = router;
