

function checkWordsInACamelCaseString(string) {
  let countForWords = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      count++;
    }
  }
  return countForWords;
}
console.log(camelcase("camelCasingCheckWeatherItIsOrNot"));
