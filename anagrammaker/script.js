// We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings,string1  and string2 , that may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.


function makeAnagram(string1, string2) {
  var count = 0;
  let stringLength = string1.length;
  let string2Length = string2.length;

  for (let i = 0; i < stringLength; i++) {
    string2Length.includes(stringLength[i]) ? (s2 = string2Length.replace(stringLength[i], "")) : count++;
   
  }
  
  return string2Length - (stringLength - count) + count;
}

console.log(
  makeAnagram(
    "absdjkvuahdakejfnfauhdsaavasdlkj",
    "djfladfhiawasdkjvalskufhafablsdkashlahdfa"
  )
);
