import * as utils from './utils';

const _ = require('lodash');

const [stacksInput, movesInput] = utils.getInputData('5', '\n\n');

type Crate = {
  [position: number]: Array<string>
}

function dayFive(): void {
  let answer = '';
  Object.entries(moveLine(createCratesArray())).forEach(([_, value]) => {
    answer = answer.concat(value.shift()!);
  });
  console.log(answer);
}

function createCratesArray(): Crate {
  let stacks: Crate = {};
  let stacksLines = stacksInput.split('\n');
  stacksLines.pop();

  for (let i = 0; i <= stacksLines[0].length; i += 4) {
    let arr: Array<string> = [];
    for (const element of stacksLines) {
      const c = element[i + 1];
      if (c.trim().length > 0) {
        arr.push(c);
      }
    }
    stacks[Object.entries(stacks).length + 1] = arr;
  }
  return stacks;
}

function moveLine(crates: Crate): Crate {
  let moveLines = movesInput.split('\n');
  moveLines.forEach((line) => {
    const split = line.split(' ');
    const amount = Number(split[1]);
    const from = Number(split[3]);
    const to = Number(split[5]);

    if (!isNaN(from) && !isNaN(to) && !isNaN(amount)) {
      let items = crates[from].splice(0, amount);
      crates[to].unshift(...items);
    }
  });
  return crates;
}

dayFive();
