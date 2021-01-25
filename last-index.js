function lastIndexOf(myArray, value) {
  for (var i = myArray.length -1; i >= 0; i--) {
    if (myArray[i] === value) {
      return i;
    }
  } 
  return -1;
}

  

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([2], 2), "=?", 0);
console.log(lastIndexOf([ 5, 4, 4 ], 5), "=?", 0);
