const mongoose = require('mongoose');

const employmentSchema = new mongoose.Schema({
  date: String,
  agency: String,
  action: String,
  rank: String,
  classification: String,
  assignment: String
});

const certificateSchema = new mongoose.Schema({
  statusDate: String,
  certificate: String,
  level: String,
  status: String,
  certDate: String,
  expDate: String,
  probatoionDate: String
});

const trainingSchema = new mongoose.Schema({
  date: String,
  crYear: String,
  course: String,
  title: String,
  status: String,
  score: String,
  hours: String
});

const attributesSchema = new mongoose.Schema({
  topic: String,
  attribute: String,
  effectiveDate: String,
  expirationDate: String
});

const educationSchema = new mongoose.Schema({
  date: String,
  degree: String,
  school: String,
  major: String,
  hours: String
})

const schema = new mongoose.Schema({
  name: String,
  dpsstNo: String,
  agency: String,
  status: String,
  rank: String,
  level: String,
  class: String,
  assign: String,
  employmentHistory: [employmentSchema],
  certificates: [certificateSchema],
  training: [trainingSchema],
  attributes: [attributesSchema],
  education: [educationSchema]
});

module.exports = mongoose.model('RawProfile', schema);
