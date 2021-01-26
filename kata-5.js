const urlEncode = function(text) {
  // Put your solution here
  let output = "";
  for (var i = 0; i < text.length; i++) {
    if(text[i]=== " ") {
      output += "%";
    } else {
      output += text[i];
    }
  }
  return output;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));