const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 6', () => {
  it('should properly calculate steps', () => {
    const banks = '0 2 7 0';

    assert.equal(part1(banks), 5);
  });
});

describe('Part Two', () => {
  it('should properly calculate steps', () => {
    const banks = '0 2 7 0';

    assert.equal(part2(banks), 4);
  });
});