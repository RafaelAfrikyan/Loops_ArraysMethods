//2. . Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).

'use strict';

let angels = [30, 30];
let sumOfAngels = 0;
let sum = 180;
let i;
let result;

for (i = 0; i < angels.length; i++) {
    sumOfAngels = sumOfAngels + angels[i];
}

result = sum - sumOfAngels;

console.log(result);