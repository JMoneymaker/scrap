const scrapeIds = require('./scrapeIds');

//is there a reson this is not just included in scrapeIds.js? Modularity?
module.exports = job => {
  return scrapeIds(job);
};
