function range(start, end, step) {
  const myArray = [];
  if (((start > end) || (step <= 0)) || (start === undefined|| end === undefined || step === undefined)) {
    return myArray;
  } else {
    for (var i = start; i<= end; i += step){
      myArray.push(i);
    }
  }
  return myArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));