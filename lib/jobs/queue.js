require('dotenv').config();

const Queue = require('bull');
const { setQueues } = require('bull-board');

const options = ({ max, durationInMinutes, attempts = 1 }) => (
  {
    limiter: {
      max,
      duration: 1000 * 60 * durationInMinutes
    },
    defaultJobOptions: {
      attempts,
      removeOnComplete: true,
      removeOnFail: 100
    },
  }
);

const idListQueue = new Queue('id list scraper', process.env.REDIS_URL, options({ max: 1, durationInMinutes: 60 }));
const profileQueue = new Queue('profile scraper', process.env.REDIS_URL, options({ max: 100, durationInMinutes: 1 }));

setQueues([idListQueue, profileQueue]);

module.exports = {
  idListQueue,
  profileQueue
};
