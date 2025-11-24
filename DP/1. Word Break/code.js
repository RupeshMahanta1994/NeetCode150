function wordBreak(s, wordDict) {
  let memo = new Map();
  return wordBreakHelper(s, wordDict, 0, memo);

  function wordBreakHelper(s, dict, start, memo) {
    //Base condition
    if (start == s.length) return true;
    //check in dp
    if (memo.has(start)) return memo.get(start);
    //iterate over the dict
    for (let word of dict) {
      let len = word.length;
      let end = start + len;
      //check if word exceeds s length
      if (end > s.length) continue;
      //validate word
      if (s.substring(start, end) == word) {
        if (wordBreakHelper(s, dict, end, memo)) {
          memo.set(start, true);
          return true;
        }
      }
    }
    memo.set(start, false);
    return false;
  }
}

let s = "applepenapple",
  wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict)); //Output: true
