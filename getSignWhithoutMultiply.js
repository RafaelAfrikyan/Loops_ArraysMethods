//Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let a = -8;
let b = 5;
let c = -10;

if (a > 0 && b > 0 && c > 0){
  console.log('+')
}
 if( a === 0 || b === 0 || c === 0) {
    console.log('unsigned')
  }
   if( a > 0 && b > 0 && c < 0) {
    console.log('-')
  }
   if( a > 0 && b < 0 && c < 0) {
    console.log('+')
  }
   if (a < 0 && b < 0 && c < 0) {
    console.log('-')
  }
  else if( a < 0 && b > 0 && c < 0) {
    console.log('+')
  }
  if (a > 0 && b < 0 && c > 0) {
    console.log('-')
  }