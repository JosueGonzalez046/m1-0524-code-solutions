/* exported includesSeven */
// define a function that receives an array of values
// loop over the input array start at 0 ending at the length of array
// check if array at i is equal to 7
// return true
function includesSeven(array: unknown[]): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
