const { idListQueue, profileQueue, storageQueue } = require('./queue');
const path = require('path');

idListQueue.process(5, path.resolve('./lib/jobs/idListProcessor.js'));
profileQueue.process(10, path.resolve('./lib/jobs/processors.js'));
// storageQueue.process(10, path.resolve('./lib/jobs/storageProcessor.js'));
