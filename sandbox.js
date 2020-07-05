require('dotenv').config();
const cheerio = require('cheerio');
const { RawProfileReport } = require('./lib/data/rawProfile');

//TODO
// fix issue with annual training summary

const parseProfile = async() => {
  const html = await cheerio.load(RawProfileReport.html);
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
          date: new Date(td(0)),
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
          statusDate: new Date(td(0)),
          certificate: td(1),
          level: td(2),
          status: td(3),
          certDate: new Date(td(4)),
          expDate: new Date(td(5)),
          probatoionDate: new Date(td(6))
        });
      }),
    training: html('#DataGrid1 tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        //not working...
        return html(el).has('[bgcolor]') ?
          ({
            date: new Date(td(0)),
            crYear: td(1),
            course: td(2),
            title: td(3),
            status: td(4),
            score: td(5),
            hours: td(6)
          }) : ({
            year: td(0),
            total: td(1) 
          });
      }),
    attributes: html('#DataGridEmpAttr tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          topic: td(0),
          attribute: td(1),
          effectiveDate: new Date(td(2)),
          expirationDate: new Date(td(3))
        });
      }),
    education: html('#DataGridEmpEduc tr').not(':first-child').get()
      .map((el) => {
        const td = n => html(el).find('td').eq(n).text().trim();
        return ({
          date: new Date(td(0)),
          degree: td(1),
          school: td(2),
          major: td(3),
          hours: td(4)
        });
      })
  });
};

parseProfile()
  .then(console.log);

