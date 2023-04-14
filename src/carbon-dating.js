const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
//  * dateSample('1') => 22387
//  * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here

  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  if (typeof sampleActivity !== "string" || sampleActivity.trim() === "") {
    return false;
  }

  // Parse the sample activity as a float
  const sampleActivityFloat = parseFloat(sampleActivity);

  // Check if the parsed sample activity is a valid number
  if (
    isNaN(sampleActivityFloat) ||
    sampleActivityFloat <= 0 ||
    sampleActivityFloat > MODERN_ACTIVITY
  ) {
    return false;
  }

  // Calculate the age of the sample using the formula
  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityFloat) / k);

  return age;
}

module.exports = {
  dateSample,
};
