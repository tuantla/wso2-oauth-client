var express = require('express');
const kafka = require('kafka-node')

var router = express.Router();


const kafkaClient = new kafka.KafkaClient({kafkaHost:'localhost:9092'});
const kafkaProducer = new kafka.Producer(kafkaClient);
kafkaProducer.on('ready', () => {
  console.log('kafka ready')
}).on('error', (err) => {
  console.error(err)
})




router.post('/', (req, res) => {


  res.status(204).send({})
});



module.exports = router;
