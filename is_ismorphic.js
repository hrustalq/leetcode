/**
 * https://leetcode.com/problems/isomorphic-strings
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 * Constraints:
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 */
const isIsomorphic = (s, t) => {
  function getPattern(str) {
    const map = new Map();
    let id = 0, pattern = ``;
    for (let i = 0, n = str.length; i < n; i++) {
      const char = str[i];
      if (!(map.has(char)))
          map.set(char, ++id);
      pattern += map.get(char);
    }
    return pattern;
  }
  return getPattern(s) === getPattern(t);
}
