const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
  // Your code in here ...
  let position = [0, 0]
  for(let i = 0; i < moves.length; i++){
    if(moves[i] === 'north') {
    position[1] += 1;
    console.log(position)
  } else if (moves[i] === 'south') {
    position[1] -= 1;
    console.log(position)
  } else if (moves[i] === 'east') {
    position[0] += 1;
    console.log(position)
  } else if (moves[i] === 'west') {
    position[0] -= 1;
    console.log(position)
  }
};
return position;
}

finalPosition(moves);

console.log(finalPosition(moves));