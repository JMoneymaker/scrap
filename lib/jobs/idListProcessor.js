const scrapeIds = require('./scrapeIds');

module.exports = job => {
  return scrapeIds(job);
};
