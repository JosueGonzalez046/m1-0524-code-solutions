/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age > 20) {
    return false;
  } else {
    return false;
  }
}
function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'nuetral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'invalid pH level';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return 'were the warner bros!';
    case 'wakko':
      return 'were the warner bros!';
    case 'dot':
      return 'im cute~';
    default:
      return 'goodnight everybody';
  }
}
function recommendMovie(genre: string): string {
  switch (genre) {
    case 'fast and furious':
      return 'action';
    case 'how high':
      return 'comedy';
    case 'insidious':
      return 'horror';
    case 'boyz n the hood':
      return 'drama';
    case 'wizard of oz':
      return 'musical';
    case 'planet of the apes':
      return 'sci fi';
    default:
      return 'random';
  }
}
