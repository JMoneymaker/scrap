require('dotenv').config();
const cheerio = require('cheerio');
const { RawProfileReport } = require('./lib/data/rawProfile');

const parseProfile = async() => {
  const html = await cheerio.load(RawProfileReport.html);
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
          crYear: td(1),
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
    allTimeTotal: Number(html('#DataGrid1 tr[bgcolor="DarkGray"]').find('td').eq(1).text().trim()),
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
          hours: Number(td(4))
        });
      })
  });
};

parseProfile()
  .then(console.log);
