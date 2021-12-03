let arrayOfArrays = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];

let arrayOfSums = arrayOfArrays.map(function (array) {
  let sum = 0;

  array.forEach(function (number) {
    sum += number;
  });

  return sum;
});

console.log(arrayOfSums);
