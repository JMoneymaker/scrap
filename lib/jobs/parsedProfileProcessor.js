require('dotenv').config();
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const ProfileReport = require('../models/ProfileReport');
const RawProfileReport = require('../models/RawProfileReport');

module.exports = async(job) => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  try {
    const rawProfile = await RawProfileReport.findById(job.data.id);
    const $ = cheerio.load(rawProfile.html);
    return ProfileReport.create(parseProfile($));
  } finally {
    await mongoose.connection.close();
  }
};

const parseProfile = html => {
  const allTraining = html('#DataGrid1 tr').not(':first-child').get();
  let yearlyTotal = allTraining.filter(el => html(el).attr('bgcolor') === 'Gainsboro');
  let trainingDetail = allTraining.filter(el => !html(el).attr('bgcolor'));

  const summary = tag => html(tag).text().trim();
  return ({
    name: summary('#txtEmpName'),
    dpsstNo: summary('#txtEmpInfo2'),
    agency: summary('#txtEmpInfo3'),
    status: summary('#txtEmpStat'),
    rank: summary('#txtEmpRank'),
    level: summary('#txtEmpLvl'),
    class: summary('#txtEmpClass'),
    assign: summary('#txtEmpAsgn'),
    employmentHistory: html('#DataGridEmpHst tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          date: td(0) ? new Date(td(0)) : null,
          agency: td(1),
          action: td(2),
          rank: td(3),
          classification: td(4),
          assignment: td(5)
        });
      }),
    certificates: html('#DataGridEmpCert tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          statusDate: td(0) ? new Date(td(0)) : null,
          certificate: td(1),
          level: td(2),
          status: td(3),
          certDate: td(4) ? new Date(td(4)) : null,
          expDate: td(5) ? new Date(td(5)) : null,
          probatoionDate: td(6) ? new Date(td(6)) : null
        });
      }),
    trainingDetail: trainingDetail
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          date: new Date(td(0)),
          crYear: td(1) ? Number(td(1)) : null,
          course: td(2),
          title: td(3),
          status: td(4),
          score: td(5),
          hours: Number(td(6))
        });
      }),
    yearlyTrainingTotal: yearlyTotal
      .map(el => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          year: Number(td(0).split(' ')[0]),
          totalHours: Number(td(1))
        });
      }),
    allTimeTrainingTotal: Number(html('#DataGrid1 tr[bgcolor="DarkGray"]').find('td').eq(1).text().trim()),
    attributes: html('#DataGridEmpAttr tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          topic: td(0),
          attribute: td(1),
          effectiveDate: td(2) ? new Date(td(2)) : null,
          expirationDate: td(3) ? new Date(td(3)) : null 
        });
      }),
    education: html('#DataGridEmpEduc tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          date: td(0) ? new Date(td(0)) : null,
          degree: td(1),
          school: td(2),
          major: td(3),
          hours: td(4) ? Number(td(4)) : 0
        });
      })
  });
};



