const width: number = 5;
const height: number = 6;
const area: number = width * height;
console.log('value of area:', area);
console.log('typeof area:', 'number');

const bill: number = 15;
const payment: number = 30;
const change: number = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', 'number');

const quizzes: number = 5;
const midterm: number = 10;
const final: number = 15;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', 'number');

const firstName: string = 'Josue';
const lastName: string = ' Gonzalez';
const fullName: string = firstName + '' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName: ', 'string');

const ph: number = 2;
const isAcidic: boolean = ph < 7;
console.log('value of isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', 'boolean');

const headcount: number = 250;
const isSparta: boolean = headcount === 300;
console.log('value of isSparta: ', isSparta);
console.log('typeof isSparta: ', 'boolean');

let motto: string = fullName;
motto += ' is the GOAT';
console.log('value of motto: ', motto);
console.log('typeof motto:', 'string');
