import * as utils from './utils';

const inputDaySix = utils.getInputData('6', '');

function daySix(size: number): void {
  inputDaySix.some((e, i) => {
    const packet = inputDaySix.slice(i, i + size);
    if (new Set(packet).size === packet.length) {
      console.log(i + size);
      return true;
    }
  });
}

daySix(4);
daySix(14);
