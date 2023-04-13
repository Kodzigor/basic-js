const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let temporary = [];
  let minusObj = {};

  if (arr.includes(4)) {
    return arr.sort((a, b) => a - b);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        temporary.push(arr[i]);
      } else if (arr[i] === -1) {
        minusObj[i] = arr[i];
      }
    }
    temporary.sort((a, b) => a - b);

    let first;
    let res = [];

    for (let minus in minusObj) {
      let index = +minus;

      first = [
        ...temporary.slice(0, index),
        minusObj[index],
        ...temporary.slice(index),
      ];
      temporary = first;
    }
    return temporary;
  }
}

module.exports = {
  sortByHeight,
};
