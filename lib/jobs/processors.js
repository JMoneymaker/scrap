const { idListQueue, rawProfileQueue, parsedProfileQueue } = require('./queue');
const path = require('path');

idListQueue.process(1, path.resolve('./lib/jobs/idListProcessor.js'));
rawProfileQueue.process(1, path.resolve('./lib/jobs/rawProfileProcessor.js'));
parsedProfileQueue.process(1, path.resolve('./lib/jobs/parsedProfileProcessor.js'));
