const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
let i = 0;
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value = "") {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    // this.props[i] = `( ${value} )`
    if (value === undefined) {
      this.chain.push("(  )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
