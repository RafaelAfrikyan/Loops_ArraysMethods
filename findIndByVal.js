let arr = [36, -12, 47, -58, 148, -55, -19, 10];
let num = -56;

let newArr = arr.map(function (val) {
  return Math.abs(val - num);
});
console.log(newArr.indexOf(Math.min(...newArr)));
console.log(newArr);
