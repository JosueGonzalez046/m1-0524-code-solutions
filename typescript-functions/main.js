'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(2);
console.log(
  'value of convertMinutesToSecondsResult: ',
  convertMinutesToSecondsResult
);
function greet(name) {
  const greet = 'hello' + ' ' + name;
  return greet;
}
const greetResult = greet('josue');
console.log('value of greet: ', greetResult);
const getArea = (height, width) => {
  const area = height * width;
  return area;
};
const getAreaResult = getArea(10, 20);
console.log('Value of getArea: ', getAreaResult);
const getFirstName = (person) => {
  const firstName = person.firstName;
  return firstName;
};
const getFirstNameResult = getFirstName({
  firstName: 'josue',
  lastName: 'gonzalez',
});
console.log('Value of getFirsName: ', getFirstNameResult);
const getLastElement = (array) => {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
};
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('Value of getLastElement(array): ', getLastElementResult);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 10);
console.log('callOtherFunction:', callOtherFunctionResult);
