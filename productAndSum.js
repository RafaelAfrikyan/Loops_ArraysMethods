// Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
// sum, print the quotient, otherwise print the remainder.

let digit = 0;
let digit_to_arr = (digit + '').split('');
let sum = 0;
let mult = 1;
for (i = 0; i < digit_to_arr.length; i++){
 sum = sum + parseInt(digit_to_arr[i], 10)
 mult = mult * parseInt(digit_to_arr[i], 10)
}
if(mult % sum === 0){
  console.log (`Quotient is ${mult/sum}.`)
}
else {
  console.log(`Remainder is ${mult % sum}.`)
}
if (digit ===0){
  console.log('Cannot calculate.')
}