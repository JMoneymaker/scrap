const cheerio = require('cheerio');
const superagent = require('superagent');

const scrapeDPSST = () => {
  return superagent
    .get('http://dpsstnet.state.or.us/PublicInquiry_CJ/SMSGoPersonLkp.aspx?LkpBy=LN&LkpVal=*')
    .then(response => cheerio.load(response.text))
    .then(html => makeDPSSTObject(html));
};

const makeDPSSTObject = html => {
  return ({
    link: html('#DataGridAgcyEmp > tbody > tr').eq(0).find('td > font > a > font').text()
  });
};

scrapeDPSST().then(console.log, 'log');

module.exports = scrapeDPSST;
