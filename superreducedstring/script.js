//Steve has a string of lowercase characters in range ascii[‘a’..’z’]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

//Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print Empty String


function reducedString(string) {
  for (var i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
     
      return string.substring(0, i) + string.substring(i + 2);
    }
  }
  return string;
}

function superReducedString(inputString) {
  var string = inputString,
    newString = reducedString(string);

  while (string != newString) {
    string = newString;
    newString = reducedString(string);
  }
  return newString === "" ? "Empty String" : newString;
}

console.log(superReducedString("aaabccddd"));