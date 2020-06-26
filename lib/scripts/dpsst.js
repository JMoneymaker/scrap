/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
const puppeteer = require('puppeteer');

const scrapeDPSST = async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://dpsstnet.state.or.us/PublicInquiry_CJ/smsgoperson.aspx', { waitUntil: 'load' });
  await page.waitFor('input[name=txtFindValue]');
  await page.$eval('input[name=txtFindValue]', el => el.value = '*');
  await page.click('input[type="submit"]');

  let leoArray = [];

  do{
    await page.waitForNavigation({ waitUntil: 'load' });
    let officerTable2 = await page.$('#DataGridAgcyEmp');
    const officerArray = await officerTable2.evaluate(element => {
      return [...element.querySelectorAll('#DataGridAgcyEmp tr').values()]
        .map(node => node.innerText)
        .map(row => row.split('\t'))
        .map(row => ({ name: row[0], id: row[1], agency: row[2] }));
    });

    officerArray.slice(1, -1).forEach(item => leoArray.push(item));

    if(!await page.$('a[href*="ctl54$_ctl1"]')) break;
    await page.evaluate(() => __doPostBack('DataGridAgcyEmp$_ctl54$_ctl1', ''));
  } while(true);

  console.log(leoArray);
  return browser.close();
};

scrapeDPSST().then(console.log);

module.exports = { 
  scrapeDPSST
};
