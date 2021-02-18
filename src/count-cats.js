const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  arr = matrix.flat(2);
  count = 0;
  arr.forEach((element) => {
    if (element == "^^") {
      count++;
    }
  });
  return count;
};
