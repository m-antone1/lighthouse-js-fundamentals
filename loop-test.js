var num = 99;
var lyr1 = " bottle of juice on the wall! ";
var lyr2 = " bottle of juice! Take one down, pass it around ... ";
var lyr3 = " bottles of juice on the wall! ";
var lyr4 =" bottles of juice! Take one down, pass it around ... ";
while (num > 0) {
    if (num === 1){
        console.log(num + lyr1
                    + num + lyr2
                    + (num-1) + lyr3);
    } else if (num ===2){
        console.log(num + lyr3
                    + num + lyr4
                    + (num-1) + lyr1);
    } else {
        console.log(num + lyr3
                    + num + lyr4
                    + (num-1) + lyr3);
    }
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    num--;// decrement num
}
