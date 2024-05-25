interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
const student: StudentProps = {
  firstName: 'Josue',
  lastName: 'Gonzalez',
  age: 28,
  livesInIrvine: false,
  previousOccupation: 'warehouse clerk',
};
const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'warehouse clerk';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student : ', student);
console.log('typeof student: ', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}
const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}
const pet: Pet = {
  name: 'coco',
  kind: 'shitzu',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
