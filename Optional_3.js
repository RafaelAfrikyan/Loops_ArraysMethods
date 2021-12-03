//Takes two arrays and insert the second array in the middle of the first array. The first array always has two elements.

let firstArr = [1, 10];
let secArr = [2, 3, 4, 5, 6, 7, 8, 9];
firstArr.splice(1, 0, ...secArr);
console.log(firstArr);
