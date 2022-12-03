const fs = require('fs');

/**
 * Reformat the given input to a string array
 *
 * @param day {string}
 * @param separator {string | RegExp}
 */
export function getInputData(day: string, separator: string | RegExp): Array<string> {
  return fs.readFileSync(`src/assets/input_${day}.txt`, 'utf-8').split(separator);
}
