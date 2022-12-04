import * as utils from './utils';

const _ = require('lodash');

const inputDayFour = utils.getInputData('4', '\n');

function dayFour(): void {
  let fullyCoveredSections: number = 0;
  let overlappingSections: number = 0;
  for (const sections of groupSections(inputDayFour)) {
    fullyCoveredSections += isSectionAlreadyFullyCovered(sections) && 1;
    overlappingSections += isSectionOverlapping(sections) && 1;
  }
  console.log('This many sections are fully covered by their partner elf: ' + fullyCoveredSections);
  console.log('This many sections are the elfes overlapping each other: ' + overlappingSections);
}

function groupSections(sectionArray: Array<string>): Array<Array<string>> {
  return sectionArray.map(section => (section.split(/[,-]/)));
}

function isSectionAlreadyFullyCovered(sections: Array<string>): boolean {
  return (+sections[2] >= +sections[0] && +sections[3] <= +sections[1])
    || (+sections[0] >= +sections[2] && +sections[1] <= +sections[3]);
}

function isSectionOverlapping(sections: Array<string>): boolean {
  return (+sections[0] >= +sections[2] && +sections[0] <= +sections[3])
    || (+sections[1] >= +sections[2] && +sections[1] <= +sections[3])
    || (+sections[2] >= +sections[0] && +sections[2] <= +sections[1])
    || (+sections[3] >= +sections[0] && +sections[3] <= +sections[1]);
}

dayFour();
