const { rawIdArray, uniqueArray } = require('../data/dummyData');

let newArray = [];
const makeNewArray = rawArray => {
  rawArray.slice(1, -1).forEach(item => !newArray.includes(item) ? newArray.push(item) : item);
  return newArray;
};

describe('data shapers', () => {
  it('only pushes uniqe ids into the array', () => {
    const newIDArray = makeNewArray(rawIdArray);
    expect(newIDArray).toEqual(uniqueArray);
  });
});
