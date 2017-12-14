const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 4', () => {
  it('should evaluate passphrases', () => {
    const passphrases =
          `aa bb cc dd ee
           aa bb cc dd aa
           aa bb cc dd aaa`;
    
    assert.equal(2, part1(passphrases));
  });
});

describe('Part 2', () => {
  it('should evaluate other passphrases', () => {
    const passphrases =
        `abcde fghij
         abcde xyz ecdab
         a ab abc abd abf abj
         iiii oiii ooii oooi oooo
         oiii ioii iioi iiio`;
    assert.equal(3, part2(passphrases));
  });
});