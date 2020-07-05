require('dotenv').config();

const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const { parsedProfileQueue } = require('./queue');
const RawProfileReport = require('../models/RawProfileReport');

module.exports = async(job) => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  try {
    const page = await browser.newPage();
 
    // Search by DPSST ID
    await page.goto('http://dpsstnet.state.or.us/PublicInquiry_CJ/smsgoperson.aspx', { waitUntil: 'load' });
    await page.waitFor('input[id="RadioButtonList1_1"]');
    await page.$eval('input[id="RadioButtonList1_1"]', el => el.checked = '"checked"');
    await page.$eval('input[name=txtFindValue]', (el, id) => el.value = id, job.data.id);
    await page.click('input[type="submit"]');

    // Find and click employee name link
    await page.waitFor('#DataGridAgcyEmp');
    await page.$eval('#DataGridAgcyEmp tr:nth-child(2) a', el => el.click());

    // Click through to the Profile Report
    await page.waitFor('#TblOrgTitle');
    await page.click('input[name="BtnProfile"]');  
 
    await page.waitFor('#FormEmpOptProfile');
    await page.click('input[name="BtnProfile"]');

    // Scrape Profile Report HTML
    await page.waitFor('body');
    const bodyHandle = await page.$('body');
    const html = await page.evaluate(body => body.innerHTML, bodyHandle);

    // Seed database
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  
    return RawProfileReport
      .create({ dpsstId: job.data.id, html })
      .then(rawProfile => parsedProfileQueue.add({ rawProfile }, { jobId: rawProfile.dpsstId }))
      .finally(() => mongoose.connection.close());
  }

  finally {
    await browser.close();
  }
};
