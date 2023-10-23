/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const filteredS = s.replace(/[ @.,\[\]`{}_':;\(\?\)\#!\-\\\\/"]/g, "", "").toLowerCase();
  if (filteredS.length < 2) return true;
  let i = 0;
  let j = filteredS.length - 1;
  while (i <= j) {
    if (filteredS[i] != filteredS[j]) return false;
    i++;
    j--;
  }
  return true;
};
