const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 5', () => {
  it('should calculate steps', () => {
    const offsets =
      `0
       3
       0
       1
      -3`;

    assert.equal(5, part1(offsets));
  });
});
describe('Part Two', () => {
  it('should calculate other steps', () => {
    const offsets =
        `0
         3
         0
         1
        -3`;

    assert.equal(10, part2(offsets));
  });
});
