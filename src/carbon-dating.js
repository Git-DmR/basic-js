const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let value;
  if (typeof sampleActivity == "string") {
    value = parseFloat(sampleActivity);
  } else return false;

  if (value > 0 && value < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / value) / (0.693 / HALF_LIFE_PERIOD));
  } else return false;
};
