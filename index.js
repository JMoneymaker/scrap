const { idListQueue, profileQueue, parsedProfileQueue } = require('./lib/jobs/queue');

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

Promise.all([
  idListQueue.empty(),
  profileQueue.empty(),
  parsedProfileQueue.empty()
])
  .then(() => Promise.all(alphabet.map(letter => idListQueue.add({ letter }))))
  .then(() => console.log('Jobs added'))
  .catch(error => console.log('Error adding jobs', error))
  .finally(() => Promise.all(([
    idListQueue.close(),
    profileQueue.close(),
    parsedProfileQueue.close()
  ])));




