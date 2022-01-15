function timeConversion(time) {
  //push the answers in the new array

  let resultArray = [];
  let splitTimeString = time.split(":");

  let pmAndAmSepartedFromNumbers = splitTimeString[2].split(/(\d)/);

  if (pmAndAmSepartedFromNumbers.includes("PM") && splitTimeString[0] !== "12") {

    //for time that is not 12 and in PM format
    let time = String(parseInt(splitTimeString[0]) + 12);
    resultArray.push(time);
    resultArray.push(splitTimeString[1]);
    pmAndAmSepartedFromNumbers.pop();
    let joined = pmAndAmSepartedFromNumbers.join("");
    resultArray.push(joined);
  } else if (pmAndAmSepartedFromNumbers.includes("PM") && splitTimeString[0] == "12") {

    //for time that is 12 and in PM
    resultArray.push(splitTimeString[0]);
    resultArray.push(splitTimeString[1]);
    pmAndAmSepartedFromNumbers.pop();
    let joined = pmAndAmSepartedFromNumbers.join("");
    resultArray.push(joined);
  } else if (splitTimeString[0] !== "12") {

    //for time that is not 12 and in AM
    resultArray.push(splitTimeString[0]);
    resultArray.push(splitTimeString[1]);
    pmAndAmSepartedFromNumbers.pop();
    let joined = pmAndAmSepartedFromNumbers.join("");
    resultArray.push(joined);
  } else {

    //for time that is 12 and in AM
    resultArray.push("00");
    resultArray.push(splitTimeString[1]);
    pmAndAmSepartedFromNumbers.pop();
    let joined = k.join("");
    resultArray.push(joined);
  }

  let result = resultArray.join(":");
  return result;
}

console.log(timeConversion("06:40:03AM"));