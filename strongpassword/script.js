function strongPassword(pass) {
  //check if the lenght of the input is atleast 6
  //contains atleast one digit
  //contains one lowercase and one uppercase letter
  //contains atleast one special character
  //find the minimum number of characters needed to make the password strong

  //divide it into if a password has 6 characters or if it does not

  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";

  let countForNumbers = 0;
  let countForLowerCase = 0;
  let countForUpperCase = 0;
  let countForSpecialCharacters = 0;

  let passWord = {};

  for (let char of pass) {
    if (passWord[char]) {
      passWord[char] += 1;
    } else {
      passWord[char] = 1;
    }
  }
  if (pass.length < 6) {
    return "You need atleast 6 characters in your password";
  } else if (pass.length >= 6) {
    for (let value in passWord) {
      if (numbers.includes(value)) {
        countForNumbers += 1;
      } else if (lower_case.includes(value)) {
        countForLowerCase += 1;
      } else if (upper_case.includes(value)) {
        countForUpperCase += 1;
      } else if (special_characters.includes(value)) {
        countForSpecialCharacters += 1;
      }
    }
  }

  if (countForNumbers < 1) {
    return "You need atleast 1 number";
  } else if (countForLowerCase < 1) {
    return "You need atleast 1 lowercaseletter";
  } else if (countForUpperCase < 1) {
    return "You need atleast 1 uppercaseletter";
  } else if (countForSpecialCharacters < 1) {
    return "You need atleast one special character";
  } else {
    return "Your password is good";
  }
}

console.log(strongPassword("123123"));