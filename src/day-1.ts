import * as utils from './utils'

const inputDayOne = utils.getInputData('1', '\n');

function dayOne(iteration: number, calories: number, caloriesArray: Array<number>): void {
  if (inputDayOne[iteration] !== undefined) {
    return dayOne(++iteration, (inputDayOne[iteration] ? (calories + +inputDayOne[iteration]) : 0),
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
