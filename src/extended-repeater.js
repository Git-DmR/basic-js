const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatArray = [];

  let repeatAction = (array, string, repeatTimes, separator = "+", addSeparator = "|") => {
    if (repeatTimes === undefined) {
      array.push(String(string));
    } else {
      for (let i = 0; i < repeatTimes; i++) {
        array.push(String(string));
      }
    }

    if (separator !== "") {
      return array.join(separator);
    } else {
      return array.join(addSeparator);
    }
  };

  let repeatArrayAdd = [];
  let strAdd = "";
  if (options.addition || options.addition === false || options.addition === null) {
    strAdd = repeatAction(repeatArrayAdd, options.addition, options.additionRepeatTimes, "", options.additionSeparator);
  }

  let result = repeatAction(repeatArray, str + strAdd, options.repeatTimes, options.separator, "");
  return result;
};
