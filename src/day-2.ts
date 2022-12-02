const fs = require('fs');
const _ = require('lodash');

/**
 * Reformat the given input to a string array
 *
 * @param day {string}
 */
function getInputData(day: string): Array<Array<string>> {
  return fs.readFileSync(`src/assets/input_${day}.txt`, 'utf-8').split(/[ \n]+/);
}

const inputDayTwo = getInputData('2');

enum ScoreEnum {
  WIN = 6,
  DRAW = 3,
  LOSE = 0
}

enum ShapeEnum {
  ROCK = 1,
  PAPER = 2,
  SCISSOR = 3
}

function calculateScore(strategy: string[]): number {
  switch (strategy[1]) {
    case 'X':
      switch (strategy[0]) {
        case 'A':
          return ScoreEnum.LOSE + ShapeEnum.SCISSOR;
        case 'B':
          return ScoreEnum.LOSE + ShapeEnum.ROCK;
        default:
          return ScoreEnum.LOSE + ShapeEnum.PAPER;
      }
    case 'Y':
      switch (strategy[0]) {
        case 'A':
          return ScoreEnum.DRAW + ShapeEnum.ROCK;
        case 'B':
          return ScoreEnum.DRAW + ShapeEnum.PAPER;
        default:
          return ScoreEnum.DRAW + ShapeEnum.SCISSOR;
      }
    case 'Z':
      switch (strategy[0]) {
        case 'A':
          return ScoreEnum.WIN + ShapeEnum.PAPER;
        case 'B':
          return ScoreEnum.WIN + ShapeEnum.SCISSOR;
        default:
          return ScoreEnum.WIN + ShapeEnum.ROCK;
      }
    default:
      return 0
  }
}

function dayTwo(): void {
  let score: number = 0;
  _.chunk(inputDayTwo, 2).map((entry: string[]) => score += calculateScore(entry));
  console.log("The Score is approximately: " + score)
}

dayTwo();
