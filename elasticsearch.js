require('dotenv').config();
const { default: fetch } = require('node-fetch');
const mongoose = require('mongoose');

const ProfileReport = require('./lib/models/ProfileReport');

const ELASTICSEARCH = 'localhost';
const INDEX_NAME = 'profiles';

mongoose.connect(process.env.MONGODB_URI, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
  });
  
addBatches();

async function addBatches(){
  const count = await ProfileReport.count();

  for(let i = 0; i <= count; i ++){
    const profile = await ProfileReport.findOne().skip(i).lean();
    delete profile._id;
    const res = await fetch(`http://${ELASTICSEARCH}:9200/${INDEX_NAME}/_doc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    });
    const json = await res.json();
    console.log(json);
  }
}
