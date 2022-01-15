
//We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. 


function hackerRank(string) {
  let wordToFind = "hackerrank";
  let indexFoundInString = 0;

  for (let i = 0; i < string.length; i++) {
    if (indexFoundInString == wordToFind.length - 1) {
      return "YES";
    }

    if (string[i] == wordToFind[indexFoundInString]) {
      indexFoundInString += 1;
    }
  }
  return "NO";
}

console.log(hackerRank("hereiamstackerrank"));