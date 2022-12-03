import * as utils from './utils';

const _ = require('lodash');

const inputDayThree = utils.getInputData('3', '\n');

function dayThreePartOne(): void {
  let priorities: number = 0;
  for (const element of inputDayThree) {
    const matchingLettersArray: Array<string> = findMatchingLetterInStringPartOne(separateBackpackStringPartOne(element));
    if (matchingLettersArray.length > 0) {
      priorities += calculatePriority(matchingLettersArray[0]);
    }
  }
  console.log('Priority Score from part one: ' + priorities);
}

function dayThreePartTwo(): void {
  let priorities: number = 0;
  for (const element of _.chunk(inputDayThree, 3)) {
    const matchingLettersArray: Array<string> = findMatchingLetterInStringPartTwo(element);
    if (matchingLettersArray.length > 0) {
      priorities += calculatePriority(matchingLettersArray[0]);
    }
  }
  console.log('Badge Score from part two: ' + priorities);
}

function separateBackpackStringPartOne(contentString: string): string[] {
  let stringLength: number = contentString.length;
  return [contentString.substring(0, (stringLength / 2)), contentString.substring((stringLength / 2), stringLength)];
}

function findMatchingLetterInStringPartOne(stringArray: Array<string>): string[] {
  return stringArray.map(entry => {
    return [...entry];
  })[0].filter(char => stringArray[1].includes(char));
}

function findMatchingLetterInStringPartTwo(stringArray: Array<string>): string[] {
  return stringArray.map(entry => {
    return [...entry];
  })[0].filter(char => stringArray[1].includes(char) && stringArray[2].includes(char));
}

function calculatePriority(char: string): number {
  return char === char.toLowerCase() ? (char.charCodeAt(0) - 96) : (char.charCodeAt(0) - 38);
}


dayThreePartOne();
dayThreePartTwo();
