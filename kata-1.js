const sumLargestNumbers = function(data) {
  // Put your solution here
  data.sort(function(a, b) {return b - a});
  let x = data[0] + data[1];
  let myArray = [x];
  return myArray;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));