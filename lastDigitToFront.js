// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
// the last digit of the inserted number is 0, number remains the same.

'use strict';

let number = 7485;

let lastDigit = number % 10;
let newnumber = (number - lastDigit) / 10;
let result = 0;

if (lastDigit === 0) {
  console.log(number)
} else {
    result = lastDigit + newnumber.toString()
}

console.log(result)