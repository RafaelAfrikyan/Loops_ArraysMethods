// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

let digit = 895796;
let check_arr = [];
let digit_to_arr = (digit + '').split('')
check_arr[0] = digit_to_arr.pop();
check_arr[1] = digit_to_arr.shift();
digit_to_arr.push(check_arr[1]);
digit_to_arr.unshift(check_arr[0]);
console.log(digit_to_arr)