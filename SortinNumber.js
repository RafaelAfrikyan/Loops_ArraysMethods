//Given three numbers. Sort them by the ascending order.


let a = 45;
let b = 26;
let c = 78;
if( a > b > c) {
    console.log(c, b, a)
} else if ( a > b && a > c && c > b) {
    console.log(b, c, a)
}
else if (a < b && b < c) {
    console.log(a, b, c)
}
else if (b > a && b > c && c > a) {
    console.log(a, c, b)
}
else if ( b < a && a < c) {
  console.log(b, a, c)
}
else if (c > a && a > b) {
console.log(c, a, b)
}