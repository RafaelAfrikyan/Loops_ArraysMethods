// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
// of their lengths.

let arr = ['anymore', 'raven', 'me', 'communicate'];
let newArr = arr.map(function(val) {
  return val.length;
});

console.log(Math.min(...newArr) + Math.max(...newArr));