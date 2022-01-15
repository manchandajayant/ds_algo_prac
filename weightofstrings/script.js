//Find weight of srings if alphabets in order of their sequence where there sequence number was equal to their weight



function weightOfStringsByQuery(string, query) {
  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let resultArray = [];
  let alphabetWeightObject = {};
  let stringObject = {};

  for (let char of alphabetString) {
    alphabetWeightObject[char] = alphabetString.indexOf(char) + 1;
  }

  for (let char of string) {
    stringObject[char] ? (stringObject[char] += 1) : (stringObject[char] = 1);
  }

  //if the elements repeat
  //if they do then their addition should be equal to the query or one element itself is equal to the query
  
  for (let v of Object.keys(stringObject)) {
    if (
      alphabetWeightObject.hasOwnProperty(v) &&
      alphabetWeightObject[v] === query
    ) {
      resultArray.push(v);
    } else if (alphabetWeightObject[v] * stringObject[v] === query) {
      resultArray.push(v);
    }
  }

  if (resultArray.length > 0) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(weightOfStringsByQuery("abccddde", 12));