import * as utils from './utils'

const _ = require('lodash');

const inputDayTwo = utils.getInputData('2', /[ \n]+/);

/**
 * This enum stores the relevant information about how much points u get for each action
 */
enum ScoreEnum {
  WIN = 6,
  DRAW = 3,
  LOSE = 0
}

/**
 * This enum stores the relevant information about how much points u get for each shape
 */
enum ShapeEnum {
  ROCK = 1,
  PAPER = 2,
  SCISSOR = 3
}

/**
 * Calculating the score for part one of advent of code day 1
 * In this part the score is calculated based on the giving string pair
 * Each string represents a move, like Rock Paper or Scissors
 *
 * @param strategy {string[]}
 *
 * @return {number} the calculated score
 */
function calculateScorePartOne(strategy: string[]): number {
  switch (strategy[1]) {
    case 'X':
      switch (strategy[0]) {
        case 'A':
          return ScoreEnum.DRAW + ShapeEnum.ROCK;
        case 'B':
          return ScoreEnum.LOSE + ShapeEnum.ROCK;
        default:
          return ScoreEnum.WIN + ShapeEnum.ROCK;
      }
    case 'Y':
      switch (strategy[0]) {
        case 'A':
          return ScoreEnum.WIN + ShapeEnum.PAPER;
        case 'B':
          return ScoreEnum.DRAW + ShapeEnum.PAPER;
        default:
          return ScoreEnum.LOSE + ShapeEnum.PAPER;
      }
    case 'Z':
      switch (strategy[0]) {
        case 'A':
          return ScoreEnum.LOSE + ShapeEnum.SCISSOR;
        case 'B':
          return ScoreEnum.WIN + ShapeEnum.SCISSOR;
        default:
          return ScoreEnum.DRAW + ShapeEnum.SCISSOR;
      }
    default:
      return 0
  }
}

/**
 * Calculating the score for part two of advent of code day 2
 * In this part the score is calculated based on what we should achieve
 * We should only WIN, DRAW or LOOSE.
 *
 * The first string represents a move, like Rock Paper or Scissors
 * The second string represents the outcome, like WIN, DRAW or LOOSE
 *
 * @param strategy {string[]}
 *
 * @return {number} the calculated score
 */
function calculateScorePartTwo(strategy: string[]): number {
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
  let scorePartOne: number = 0;
  let scorePartTwo: number = 0;
  _.chunk(inputDayTwo, 2).map((entry: string[]) => scorePartOne += calculateScorePartOne(entry));
  _.chunk(inputDayTwo, 2).map((entry: string[]) => scorePartTwo += calculateScorePartTwo(entry));
  console.log("The Score in part 1 is approximately: " + scorePartOne)
  console.log("The Score in part 2 is approximately: " + scorePartTwo)
}

dayTwo();
