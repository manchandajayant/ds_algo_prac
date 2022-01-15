//Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring 010.

// In one step, Alice can change a 0 to a 1 or vice versa. Count and print the minimum number of steps needed to make Alice see the string as beautiful.

// For example, if Alice's string is b = 010 she can change any one element and have a beautiful string.



function beautifulBinaryForAlice(binary) {
  let stringToArray = binary.split("");

  let countForChanges = 0;
  for (let i = 1; i < stringToArray.length; i++) {
    if (stringToArray[i + 1]) {
      if (
        stringToArray[i] == 1 &&
        stringToArray[i - 1] == 0 &&
        stringToArray[i + 1] == 0
      ) {
        countForChanges++;
        stringToArray[i + 1] = "1";
      }
    }
  }

  return countForChanges;
}

beautifulBinaryForAlice("0100101010");