//const raining = false;

//const cold = true;

const temperature = -10;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

/*if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");*/
const isCitizen = true;

const age = 45;
//this next line is left 'true' in solidarity for our soggy friends in Vancouver 
const raining = true;

if (isCitizen && age > 18){
  console.log("You are eligible to vote.");
}
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't sure a great idea...");
}
if(!raining) {
  console.log("Leave your umbrella at home!");
}