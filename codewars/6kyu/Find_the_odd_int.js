/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


정수 배열이 주어지면 홀수 번 나타나는 정수를 찾으십시오.

홀수 번 나타나는 정수는 항상 하나뿐입니다.

ex.
[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]       5
[1,1,2,-2,5,2,4,4,-1,-2,5]                     -1
[20,1,1,2,2,3,3,5,5,4,20,4,5]                   5
[10]                                            10
[1,1,1,1,1,1,10,1,1,1,1]                        10
[5,4,3,2,1,5,4,3,2,10,10]                       1
*/

function findOdd(A) {
  //happy coding!
  var result;
  var obj = {}
  var length = A.length;
  
  for (var i=0; i < length; i++) {
      if (!obj[A[i]]) {
        obj[A[i]] = 1;
      } else {
        obj[A[i]]++;
      }
  }
  
  for (var key in obj) {
    if (obj[key]%2 === 1) {
      result = key * 1;
    }
  }
  
  return result;
}
