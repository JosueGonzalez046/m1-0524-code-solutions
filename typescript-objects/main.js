'use strict';
const student = {
  firstName: 'Josue',
  lastName: 'Gonzalez',
  age: 28,
  livesInIrvine: false,
  previousOccupation: 'warehouse clerk',
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'warehouse clerk';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student : ', student);
console.log('typeof student: ', typeof student);
const vehicle = {
  make: 'tesla',
  model: 'y',
  year: 2024,
};
vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('value of vehicle color: ', vehicle['color']);
console.log('value of vehicle isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);
console.log('type of vehicle: ', typeof vehicle);
const pet = {
  name: 'coco',
  kind: 'shitzu',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
