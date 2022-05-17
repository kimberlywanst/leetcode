// question: https://leetcode.com/problems/ransom-note/
// submission: https://leetcode.com/submissions/detail/701247923/

// using hash table

// requirements:
//  1. both arrays contains lowercase alphabets -> length = 26
//  2. randomNote constructed from magazine -> ransomNote length < magazine length

/**
 * @param {string} ransomNote = []
 * @param {string} magazine = []
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // ransomNote length cannot be > magazine
  if (ransomNote.length > magazine.length) {
    return false;
  }

  // store characters from magazine in hash table
  const hashMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    // check if character already exists
    if (hashMap.has(magazine[i])) {
      hashMap.set(magazine[i], hashMap.get(magazine[i]) + 1);
      // add new character to hash map
    } else hashMap.set(magazine[i], 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    // if any char == undefined -> not present in magazine
    // or char doesn't exist in hash
    if (!hashMap.has(ransomNote[i]) || hashMap.get(ransomNote[i]) === 0) {
      return false;
    }
    // matches char from magazine
    // decrement to tally
    hashMap.set(ransomNote[i], hashMap.get(ransomNote[i]) - 1);
  }
  // all chars can be found in magazine
  return true;
};
