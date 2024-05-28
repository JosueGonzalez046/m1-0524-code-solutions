function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult: number = convertMinutesToSeconds(2);
console.log(
  'value of convertMinutesToSecondsResult: ',
  convertMinutesToSecondsResult
);

function greet(name: string): string {
  const greet: string = 'hello' + ' ' + name;
  return greet;
}
const greetResult: string = greet('josue');
console.log('value of greet: ', greetResult);

const getArea = (height: number, width: number): number => {
  const area: number = height * width;
  return area;
};
const getAreaResult: number = getArea(10, 20);
console.log('Value of getArea: ', getAreaResult);

interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => {
  const firstName: string = person.firstName;
  return firstName;
};
const getFirstNameResult: string = getFirstName({
  firstName: 'josue',
  lastName: 'gonzalez',
});
console.log('Value of getFirsName: ', getFirstNameResult);

const getLastElement = (array: string[]): string => {
  const lastIndex: number = array.length - 1;
  const lastElement: string = array[lastIndex];
  return lastElement;
};
const getLastElementResult: string = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('Value of getLastElement(array): ', getLastElementResult);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
const callOtherFunctionResult: number = callOtherFunction(
  convertMinutesToSeconds,
  10
);

console.log('callOtherFunction:', callOtherFunctionResult);
