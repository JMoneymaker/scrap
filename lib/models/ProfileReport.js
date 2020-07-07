const mongoose = require('mongoose');

const employmentSchema = new mongoose.Schema({
  date: Date,
  agency: String,
  action: String,
  rank: String,
  classification: String,
  assignment: String
});

const certificateSchema = new mongoose.Schema({
  statusDate: Date,
  certificate: String,
  level: String,
  status: String,
  certDate: Date,
  expDate: Date,
  probationDate: Date
});

const trainingSchema = new mongoose.Schema({
  date: Date,
  courseYear: String,
  course: String,
  title: String,
  status: String,
  score: String,
  hours: Number
});

const attributesSchema = new mongoose.Schema({
  topic: String,
  attribute: String,
  effectiveDate: Date,
  expirationDate: Date
});

const educationSchema = new mongoose.Schema({
  date: Date,
  degree: String,
  school: String,
  major: String,
  hours: String
});

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
}, {
  timestamps: true
});

module.exports = mongoose.model('ProfileReport', schema);
