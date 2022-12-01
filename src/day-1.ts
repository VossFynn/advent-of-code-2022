const fs = require('fs');

/**
 * Reformat the given input to a string array
 *
 * @param day {string}
 */
function getInputData(day: string): Array<string> {
  return fs.readFileSync(`src/assets/input_${day}.txt`, 'utf-8').split('\n');
}

const inputDayOne = getInputData('1');

function dayOne(iteration: number, calories: number, caloriesArray: Array<number>): void {
  if (inputDayOne[iteration] !== undefined) {
    return dayOne((iteration + 1), (inputDayOne[iteration] ? (calories + +inputDayOne[iteration]) : 0),
      (inputDayOne[iteration] ? caloriesArray : [...caloriesArray, calories]));
  } else {
    console.log('Highest calories: ' + Math.max(...caloriesArray));
    console.log('Sum of the 3 highest calories: ' +
      caloriesArray
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => {
        return a + b;
      }, 0));
  }
}

dayOne(0, 0, []);
