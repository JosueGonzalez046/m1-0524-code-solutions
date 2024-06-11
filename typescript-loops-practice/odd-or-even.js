'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const string = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      string.push('even');
    } else {
      string.push('odd');
    }
  }
  return string;
}
