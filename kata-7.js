const checkAir = function (samples, threshold) {
  // Code here!
  let clean = 0;
  let dirty = 0;
  for (let i = 0; i < samples.length; i++) {
  if (samples[i] === "dirty") {
    dirty += 1;
  } else if (samples[i] === "clean") {
    clean += 1;
  }
}
while ((dirty / clean) > threshold) {
  return "Polluted";
}
  return "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))