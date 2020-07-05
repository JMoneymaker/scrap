require('dotenv').config();
// const mongoose = require('mongoose');
const cheerio = require('cheerio');
const { rawProfile } = require('../data/rawProfile');
// const Profile = require('../models/Profile');

const parseProfile = async(job) => {
  let html = await cheerio.load(rawProfile.html);
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
          date: td(0),
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
          statusDate: td(0),
          certificate: td(1),
          level: td(2),
          status: td(3),
          certDate: td(4),
          expDate: td(5),
          probatoionDate: td(6)
        });
      }),
    //year: html(el).find('td [bgcolor="Gainsboro"]').eq(0).text().trim(),
    //total: html(el).find('td [bgcolor="Gainsboro"]').eq().text().trim(),
    training: html('#DataGrid1 tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          date: td(0),
          crYear: td(1),
          course: td(2),
          title: td(3),
          status: td(4),
          score: td(5),
          hours: td(6)
        });
      }),
    attributes: html('#DataGridEmpAttr tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          topic: td(0),
          attribute: td(1),
          effectiveDate: td(2),
          expirationDate: td(3)
        });
      }),
    education: html('#DataGridEmpEduc tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          date: td(0),
          degree: td(1),
          school: td(2),
          major: td(3),
          hours: td(4)
        });
      })
  });



  // mongoose.connect(process.env.MONGODB_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false
  // });

  // return Profile
  //   .create(job.data)
  //   .finally(() => mongoose.connection.close());
};

parseProfile().then(console.log);
