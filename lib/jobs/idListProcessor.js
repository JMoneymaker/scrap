const scrapeIds = require('./scrapeIDs');

module.exports = job => {
  return scrapeIds(job);
};
