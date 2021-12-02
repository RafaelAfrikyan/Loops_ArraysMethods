// Enter a number. Find the difference between its biggest and smallest digits.

let digit = 152;
digitArr = digit.toString().split('')
console.log(Math.max(...digitArr) - Math.min(...digitArr))