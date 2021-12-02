//Insert a digit and a number. Check whether the digits contains in the number or not.

let a = 5;
let b = 24567;
let string_b = b + '';
let string_a = a + '';
let arr_from_b = string_b.split('');
if (arr_from_b.includes(string_a)) {
  console.log('yes')
}
  else {console.log('no')
}