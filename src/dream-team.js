const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  members.forEach((element) => {
    if (typeof element === "string") {
      let item = element.trim().charAt(0).toUpperCase();
      result.push(item);
    }
  });
  result = result.sort().join("");
  return result;
};
