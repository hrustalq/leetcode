/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 */
const isAnagram = (s: string, t: string): boolean => {
  if(s.length !== t.length) return false
  const hash = {}
  for(let i = 0; i < s.length; i++) {
    if(!hash[s[i]]) hash[s[i]] = 0
    ++hash[s[i]]
  }
  for(let i = 0; i < t.length; i++) {
    if(!hash[t[i]]) return false
    --hash[t[i]]
  }
  return true
};
