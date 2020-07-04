const rawResponse = require('./lib/data/sample.json');
const html = require('./sample');
const parse = require('parse5');

// const makePrettyProfile = (html) => {
//   return parse.parse(html);
// };

const document = parse.parse(html);
console.log(document.childNodes[1].tagName);

// console.log(makePrettyProfile(html));

