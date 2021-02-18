const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnCount = 2 ** disksNumber - 1;
  let turnSpeedPerSec = turnsSpeed / 3600;
  let sec = Math.floor(turnCount / turnSpeedPerSec);
  return { turns: turnCount, seconds: sec };
};
