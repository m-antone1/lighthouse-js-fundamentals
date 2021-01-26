const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  for (i = 0; i < data.length; i++){
    if (data[i] === "a" || "e" || "i" || "o" || "u"){
       count += 1;
    }
  }
return count;
}


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));