// Given a sentence as a string. Split it according to space and comma and create an array consisting of
// the words of the array. The last word should not contain the last . or ! .

let sent = 'Keep your. friends close, but your enemies closer.';
let sentToArr= sent.split(' ');
let taza = sentToArr.map(function(val) {
 return val.replaceAll(',', '')
})

taza[taza.length - 1] = 
  taza[taza.length - 1]
    .replaceAll('.', '')
    .replaceAll('!', '');

console.log(taza);