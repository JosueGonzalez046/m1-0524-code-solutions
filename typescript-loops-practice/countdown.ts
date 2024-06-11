/* exported countdown */
function countdown(num: number): number[] {
  const numbersArray = [];
  for (let i = num; i >= 0; i--) {
    numbersArray.push(i);
  }
  return numbersArray;
}
