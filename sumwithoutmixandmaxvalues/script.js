function minMax(arr) {
  //iterate and find out the minimum and maximum values in the array
  //once the program knows the minimum and maximum values, it iterates over the array
  //and if index is equal to minimum value then it does not count that or vice-versa
  let minValue = arr[0];
  let maxValue = arr[0];

  let minSum = 0;
  let maxSum = 0;

  let countForIdenticalArray = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= minValue) {
      minValue = arr[i];
    }
    if (arr[i] >= maxValue) {
      maxValue = arr[i];
    }
    if (arr[i] === minValue) {
      countForIdenticalArray = countForIdenticalArray + 1;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== minValue) {
      maxSum += arr[j];
    }

    if (arr[j] !== maxValue) {
      minSum += arr[j];
    }
  }
  if (countForIdenticalArray === arr.length - 1) {
    minSum = minValue * countForIdenticalArray;
    maxSum = maxValue * countForIdenticalArray;
  }

  console.log(minSum, maxSum);
}
}

minMax([5,5,5,5,5]);
