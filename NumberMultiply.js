// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

//first method
let numbers = [3, 5, 7];
let digit = 21;
for(let i = 0; i < numbers.length; i++){
  if (digit % numbers[i] === 0){
    console.log(` ${digit} is multiply of a ${numbers[i]} `)
  }
}

//second method

let a = 3;
let b = 5;
let c =7;
let digit = 21;
if(digit % a === 0 && digit % b === 0 && digit % c === 0) {
  console.log( ` ${digit} is multiply of a ${a, b, c} `)
} 
else if( digit % a === 0 && digit % b === 0 && digit % c !==0) {
  console.log(` ${digit} is multiply of a ${a} and ${b} `)
} else if (digit % a === 0 && digit % b !== 0 && digit % c ===0) {
  console.log(` ${digit} is multiply of a ${a} and ${c} `)
}
else if( digit % a !==0 && digit % b !==0 && digit % c !==0) {
  console.log(` ${digit} is not a multiple of ${a}, ${b} and ${c}`)
}