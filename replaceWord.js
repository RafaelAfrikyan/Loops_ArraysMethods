// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
// words from the array.

let sent = '_, we have a _.';
let arr = ['Houston', 'problem'];
let newArr = sent.split(' ');
let result = newArr.map(function(val){
    if(val.includes('_')){
      let i = 0;
      while(i < arr.length) {
        val = arr[i];
        i++;
      }
}
return val;
  })
        

    console.log(result)
  