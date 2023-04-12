const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (const el of element) {
      if (el === "^^") counter++;
    }
  }
  return counter;
  // remove line with error and write your code here
}

module.exports = {
  countCats,
};
