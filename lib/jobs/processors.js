const { idListQueue, profileQueue } = require('./queue');
const path = require('path');

idListQueue.process(5, path.resolve('./lib/jobs/idListProcessor.js'));
profileQueue.process(10, path.resolve('./lib/jobs/processors.js'));
