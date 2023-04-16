const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Convert str and addition to string if they are not already
  str = String(str);
  let addition =
    options && options.addition !== undefined ? String(options.addition) : "";

  // Extract options or use default values
  let repeatTimes =
    options && options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let separator =
    options && options.separator !== undefined ? options.separator : "+";
  let additionRepeatTimes =
    options && options.additionRepeatTimes !== undefined
      ? options.additionRepeatTimes
      : 1;
  let additionSeparator =
    options && options.additionSeparator !== undefined
      ? options.additionSeparator
      : "|";

  // Repeat the addition string
  let repeatedAddition = addition;
  if (additionRepeatTimes > 1) {
    repeatedAddition = new Array(additionRepeatTimes)
      .fill(addition)
      .join(additionSeparator);
  }

  // Repeat the main string
  let repeatedStr = new Array(repeatTimes)
    .fill(str + repeatedAddition)
    .join(separator);

  return repeatedStr;
}

module.exports = {
  repeater,
};
