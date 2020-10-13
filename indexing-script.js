require('dotenv').config();
const superagent = require('superagent');
const Client = require('mongodb').MongoClient;
const ProfileReport = require('./lib/models/ProfileReport');

const ELASTICSEARCH = '172.17.0.2';
const INDEX_NAME = 'profiles';

Client.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  
  return superagent
    .put(`http://${ELASTICSEARCH}:9200/${INDEX_NAME}`)
    .then(
      ProfileReport.find()
        .map(profile => {
          delete profile._id;
          return superagent
            .post(`http://${ELASTICSEARCH}:9200/${INDEX_NAME}/_doc`)
            .set({ 'Content-Type': 'application/json' })
            .send({ body: JSON.stringify(profile) }); 
        })
        .then(res => res.json())
        .then(console.log))
    .catch(err);
    
});
