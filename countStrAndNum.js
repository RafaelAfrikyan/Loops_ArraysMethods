// Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.

let arr = [1, '10', 'hi', 2, 3];
let i = 0;
  let k = 0;
let result = arr.filter(function(val) {
  
  if(typeof val === 'number') {
    i++;
  }
  if(typeof val ==='string'){
    k++
  }
  return i, k;
})
console.log(`numbers: ${i}, Strings: ${k} `)