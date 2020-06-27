const { idListQueue } = require('./lib/jobs/queue');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// const doubleAlphabet = alphabet.flatMap((letter) => {
//   return new Array(26).fill('').map((_, i) => letter + String.fromCharCode(97 + i));
// });

alphabet.map(letter => {
  return idListQueue.add({ letter });
});
