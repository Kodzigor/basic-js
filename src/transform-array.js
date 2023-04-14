const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (
    !Array.isArray(arr) ||
    arr === undefined ||
    arr === null ||
    typeof arr === "number" ||
    typeof arr === "boolean"
  ) {
    return `'arr' parameter must be an instance of the Array!`;
  }
  if (arr.length === 0) {
    return [];
  }

  let target = [
    "--double-next",
    "--double-prev",
    "--discard-prev",
    "--discard-next",
  ];
  // console.log(arr.indexOf(target))
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let prev = arr[i];
    let next = arr[i + 1];
    if (arr[i] === undefined) {
      continue;
    } else if (next === target[1]) {
      next = prev;
      temp.push(next);
      // i++
    } else if (prev === target[0]) {
      temp.push(next);
      continue;
    } else if (next === target[2]) {
      continue;
    } else if (prev === target[3]) {
      i++;
      continue;
    }
    temp.push(arr[i]);
  }
  let fin = temp.filter((el) => !target.includes(el));
  return fin;
}

module.exports = {
  transform,
};
