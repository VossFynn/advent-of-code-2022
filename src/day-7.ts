import * as utils from './utils';

const inputDaySeven = utils.getInputData('7', '\n');

function daySeven() {
  const d: { [key: string]: number } = {};
  const c: Array<string> = [];
  inputDaySeven.forEach((l) => {
    if (l.startsWith('$ cd ')) {
      l.includes('..') ? c.pop() : c.push(l.split('$ cd ')[1]);
    } else if (/^\d/.test(l)) {
      const a: Array<string> = [...c];
      while (a.length) {
        const k = a.join('_');
        d[k] = (d[k] || 0) + Number(l.split(' ')[0]);
        a.pop();
      }
    }
  });
  console.log(Int32Array.from(Object.values(d))
  .filter(v => v >= 30000000 - (70000000 - d['/']))
  .sort()[0]);
}

daySeven();


