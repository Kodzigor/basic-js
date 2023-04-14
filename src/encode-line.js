const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const abc = "qwertyuiopasdfghjklzxcvbnm";
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = "";
  if (str === "") {
    return res;
  }
  str = str.split("");
  let counter = 0;

  let temp;
  for (let i = 0; i < str.length; i++) {
    if (abc.indexOf(str[i])) {
      counter++;
    }
    if (str[i + 1] !== str[i]) {
      if (counter < 2) {
        res += str[i];
      } else {
        res += counter + str[i];
      }
      temp = counter;
      counter = 0;
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
