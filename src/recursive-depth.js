const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = arr.reduce(function (sum, el) {
      return Array.isArray(el) ? sum + 1 : sum;
    }, 0);
    if (count == 0) {
      return 1;
    }
    let maxDepth = 0;
    let currentDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currentDepth = 1 + this.calculateDepth(arr[i]);
      }
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
};
