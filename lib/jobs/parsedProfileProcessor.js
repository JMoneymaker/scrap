const parseProfile = require('./parseProfiles');

module.exports = job => {
  return parseProfile(job);
};
