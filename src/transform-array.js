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
function transform(/*arr*/) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here

  // if (arr.length === 0) {
  //   return [];
  // }
  // if (!Array.isArray(arr)) {
  //   return `'arr' parameter must be an instance of the Array!`;
  // }

  // let target = ["--double-next", "--double-prev"];
  // // console.log(arr.indexOf(target))
  // let res = arr.map((el, i) => {
  //   let fin = [];
  //   if (target.includes(el)) {
  //     if (el === "--double-next") {
  //       fin.push(
  //         arr
  //           .slice(0, i)
  //           .concat(arr[i + 1])
  //           .concat(arr.slice(i + 1))
  //       );
  //       console.log(el);
  //     } else if (el === "--double-prev") {
  //       fin.push(arr.slice(0, i).concat(arr[i - 1]));
  //       console.log(el);
  //     }
  //   } else {
  //     return [];
  //   }
  //   return fin;
  // });
  // return res
  //   .join("")
  //   .split(",")
  //   .filter((el) => {
  //     if (isFinite(el)) {
  //       return +el;
  //     }
  //   })
  //   .map((el) => +el);
}

module.exports = {
  transform,
};
