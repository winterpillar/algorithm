/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)


3 또는 5의 배수 인 10 미만의 모든 자연수를 나열하면 3, 5, 6, 9 가 됩니다. 이 배수의 합은 23입니다.

전달된 숫자(number) 미만의 3 또는 5의 배수의 합을 반환하는 solution 함수를 작성하시오. 

참고: 숫자가 3과 5의 배수인 경우 한 번만 계산합니다. 또한 숫자가 음수면 0을 반환합니다.
*/

function solution(number){
  if (number <= 2) return 0;
  var sum = 0;
  
  for (var i=3; i < number; i++) {
    if (i%15 === 0) {
      sum += i;
    } else if (i%3 === 0) {
      sum += i;
    } else if (i%5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}
