const { idListQueue, rawProfileQueue, parsedProfileQueue } = require('./queue');
const path = require('path');

idListQueue.process(1, path.resolve('./idListProcessor.js'));
rawProfileQueue.process(1, path.resolve('./rawProfileProcessor.js'));
parsedProfileQueue.process(1, path.resolve('./parsedProfileProcessor.js'));
