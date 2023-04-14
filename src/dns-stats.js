const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let flatted = domains
    .map((el) => el.split("."))
    .flat()
    .sort();

  let counter = 1;
  let temp;
  let res = {};
  let name = "";
  for (let i = 0; i < flatted.length; i++) {
    if (flatted[i + 1] === flatted[i]) {
      counter++;
    } else {
      name = name + `.${flatted[i]}`;
      res[name] = counter;
      temp = counter;
      counter = 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats,
};
