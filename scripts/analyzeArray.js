function analyzeArray(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average = average + array[i];
  }
  average = average / array.length;

  let sortedArray = array.sort((a, b) => a - b);
  let min = sortedArray[0];
  let max = sortedArray[sortedArray.length - 1];

  return {
    average,
    min,
    max,
    length: array.length,
  };
}

export default analyzeArray;
