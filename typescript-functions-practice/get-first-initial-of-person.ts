/* exported getFirstInitialOfPerson */
interface Person {
  firstName: string;
}
function getFirstInitialOfPerson(person: Person): string {
  const firstName: string = person.firstName;
  const firstInitial: string = firstName[0];
  return firstInitial;
}
