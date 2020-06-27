const { profileQueue } = require('./queue');
const { scrapeIds } = require('../scripts/scrapeIds');

module.exports = job => {
  // scrape page
  return scrapeIds(job)
    .then(ids => ids.forEach(id => {
      profileQueue.add({ id });
    }));
};
