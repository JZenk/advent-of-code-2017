const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 2: Corruption Checksum', () => {
  it('should calculate checksum', () => {
    const spreadsheet =
      `5 1 9 5
       7 5 3
       2 4 6 8`;

    assert.equal(18, part1(spreadsheet));
  });
});

describe('Part Two', () => {
  it('should calculate second checksum', () => {
    const spreadsheet =
        `5 9 2 8
         9 4 7 3
         3 8 6 5`;

    assert.equal(9, part2(spreadsheet));
  });
});