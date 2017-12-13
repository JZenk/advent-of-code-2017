const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 1: Inverse Captcha', () => {
  it('should calculate 1122', () => {
    assert.equal(3, part1('1122'));
  });
  it('should calculate 1111', () => {
    assert.equal(4, part1('1111'));
  });

  it('should calculate 1234', () => {
    assert.equal(0, part1('1234'));
  });

  it('should calculate 91212129', () => {
    assert.equal(9, part1('91212129'));
  });
});

describe('Part Two', () => {
  it('should calculate 1212', () => {
    assert.equal(6, part2('1212'));
  });

  it('should calculate 1221', () => {
    assert.equal(0, part2('1221'));
  });

  it('should calculate 123425', () => {
    assert.equal(4, part2('123425'));
  });

  it('should calculate 123123', () => {
    assert.equal(12, part2('123123'));
  });

  it('should calculate 12131415', () => {
    assert.equal(4, part2('12131415'));
  });
});