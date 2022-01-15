function pangram(s) {
  let arrayForAlphabetsToBePushedTo = [];
  let stringToArray = s.toLowerCase().split("");

  let alphabetsToCheckPangramFor = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < stringToArray.length; i++) {
    if (
      stringToArray[i] !== "" &&
      alphabetsToCheckPangramFor.includes(stringToArray[i])
    ) {
      if (arrayForAlphabetsToBePushedTo.indexOf(stringToArray[i]) == -1) {
        arrayForAlphabetsToBePushedTo.push(stringToArray[i]);
      }
    }
  }
  if (
    alphabetsToCheckPangramFor.length === arrayForAlphabetsToBePushedTo.length
  ) {
    return "YES PANGRAM";
  } else {
    return "NO PANGRAM";
  }
}

console.log(pangram("The quick brown fox jumps over the lazy dog"));