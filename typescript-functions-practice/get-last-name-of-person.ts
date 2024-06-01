/* exported getLastNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}
function getLastNameOfPerson(person: Person): string {
  const lastName: string = person.lastName;
  return lastName;
}
