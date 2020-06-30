const { idListQueue, profileQueue } = require('./queue');
const path = require('path');

idListQueue.process(1, path.resolve('./lib/jobs/idListProcessor.js'));
profileQueue.process(1, path.resolve('./lib/jobs/profileProcessor.js'));
