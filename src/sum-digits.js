const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = countdigits(n);
  if (res.toString().length > 1) {
    return countdigits(res);
  } else {
    return res;
  }
}

function countdigits(number) {
  let numString = number + "";
  let res = 0;
  for (const el of numString) {
    res += +el;
  }
  return res;
}

module.exports = {
  getSumOfDigits,
};
