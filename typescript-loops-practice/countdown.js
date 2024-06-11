'use strict';
/* exported countdown */
function countdown(num) {
  const numbersArray = [];
  for (let i = num; i >= 0; i--) {
    numbersArray.push(i);
  }
  return numbersArray;
}
