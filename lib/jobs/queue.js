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
    }
  }
);

const idListQueue = new Queue('id list scraper', process.env.REDIS_URL);
const rawProfileQueue = new Queue('profile scraper', process.env.REDIS_URL, options({ max: 100, durationInMinutes: 1 }));
const parsedProfileQueue = new Queue('profile parser', process.env.REDIS_URL, options({ max: 100, durationInMinutes: 1 }));


setQueues([idListQueue, rawProfileQueue, parsedProfileQueue]);

module.exports = {
  idListQueue,
  rawProfileQueue,
  parsedProfileQueue
};
