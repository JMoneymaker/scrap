const chance = require('chance').Chance();
const { default: fetch } = require('node-fetch');

const Client = require('mongodb').MongoClient;

const ELASTICSEARCH = '172.19.0.3';
const INDEX_NAME = 'tweets';

Client.connect('mongodb://172.17.0.2:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  const db = client.db('tweets');
  
  const tweets = db.collection('tweets');
  fetch(`http://${ELASTICSEARCH}:9200/${INDEX_NAME}`, {
    method: 'PUT'
  })
    .then(() => {
      tweets.insertMany([...Array(1000)].map((_, i) => ({
        text: chance.sentence(),
        number: chance.integer({ min: 1, max: 5 })
      })), (err, result) => {
        tweets.find({}).forEach(d => {
          delete d._id;
          fetch(`http://${ELASTICSEARCH}:9200/tweets/_doc`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(d)
          })
            .then(res => res.json())
            .then(console.log);
        });
      });
    });
});
