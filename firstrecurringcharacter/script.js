//first recurring character in an array


function firstRecurringCharacter(input) {
  let characterMap = {};
  for (let char of input) {
    if (characterMap[char]) {
      return char;
    } else {
      characterMap[char] = 1;
    }
  }
  return undefined;
}



console.log(firstRecurringCharacter([2, 3, 3, 2, 5, 3]));