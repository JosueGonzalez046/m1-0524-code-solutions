'use strict';
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
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
const josue = {
  name: 'josue',
  age: 12,
};
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
function categorizeAcidity(pH) {
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
function introduceWarnerBro(name) {
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
function recommendMovie(genre) {
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
