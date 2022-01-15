// You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.




function alternatingCharacters(string) {
  let stringToArray = string.split("");
  let resultArray = [];

  for (let i = 0; i < stringToArray.length; i++) {
  
    if (stringToArray[i + 1]) {
      if (stringToArray[i] !== stringToArray[i + 1]) {
        resultArray.push(stringToArray[i]);
      }
    } else if (!stringToArray[i + 1]) {
  
      if (stringToArray[i] === stringToArray[i - 1]) {
        resultArray.push(stringToArray[i]);
      }else {
        resultArray.push(stringToArray[i]);
      }
    }
  }

  return stringToArray.length - resultArray.length;
}

console.log(alternatingCharacters("AAABBB"));