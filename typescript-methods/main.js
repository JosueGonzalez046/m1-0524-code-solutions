'use strict';
const heroes = ['batman', 'superman', 'blackPanther', 'spiderMan'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of random index:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of random hero:', randomHero);
const library = [
  {
    title: 'Chamber of Secrets',
    author: 'J. K. Rowling',
  },
  {
    title: 'Prisoner of Azkaban',
    author: 'J. K. Rowling',
  },
  {
    title: 'Half-Blood Prince',
    author: 'J. K. Rowling',
  },
];
const lastBook = library.pop();
console.log('value of last book:', lastBook);
const firstBook = library.shift();
console.log('value of the first book:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library array:', library);
const fullName = 'Josue Gonzalez';
fullName.split(' ');
const firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLAstName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of say my name:', sayMyName);
const employee = {
  name: 'josue',
  age: 28,
  position: 'warehouse',
};
const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('value of employee values:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('value of employee pairs:', employeePairs);
