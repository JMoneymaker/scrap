const { idListQueue, profileQueue } = require('./lib/jobs/queue');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

idListQueue.clean();
alphabet.map(letter => {
  return idListQueue.add({ letter });
});

// profileQueue.add({ id: 33039 });

// setInterval(() => {
//   idListQueue.add({ letter: 'a' });
// }, 1);

