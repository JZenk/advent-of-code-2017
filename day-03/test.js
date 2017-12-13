const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 3: Spiral Memory', () => {
  it('should calculate 1', () => {
    assert.equal(0, part1(1));
  });

  it('should calculate 12', () => {
    assert.equal(3, part1(12));
  });

  it('should calculate 23', () => {
    assert.equal(2, part1(23));
  });

  it('should calculate 1024', () => {
    assert.equal(31, part1(1024));
  });
});
describe('Part Two', () => {
  it('should calculate 10', () => {
    assert.equal(11, part2(10));
  });

  it('should calculate 59', () => {
    assert.equal(122, part2(59));
  });
});