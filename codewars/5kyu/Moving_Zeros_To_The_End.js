/* moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

var moveZeros = function (arr) {
  // TODO: Program me
  var array1 = [];
  var array2 = [];
  
  var arrLength = arr.length;
  for (var i=0; i < arrLength; i++) {
    if(arr[i] === 0) {
      array2.push(arr[i]);
    } else {
      array1.push(arr[i]);
    }
  }
  
  return array1.concat(array2);
}
