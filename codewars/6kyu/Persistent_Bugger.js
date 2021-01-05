/*
  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
   //code me
  if (num < 10) return 0;
  var cnt = 1;
  
  function loop(n) {
    var res = '' + n;
    var length = res.length;
    var sum = 1;
    
    for(var i=0; i < length; i++) {
        sum *= (res[i] * 1);
    }
    
    if (String(sum).length > 1) {
      cnt++;
      return loop(sum);
    } else {
      return cnt;
    }
  }
  
  return loop(num);
}
