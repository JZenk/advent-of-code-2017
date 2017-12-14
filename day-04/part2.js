const passphrases = (input) => {
  return input
    .split('\n')
    .map((x) => x.trim().split(/[\s\t]+/).map((w) => w.split('').sort().join()))
    .reduce((gather, value) => {
      const words = [...new Set(value)];
      return gather + (words.length === value.length ? 1 : 0);
    }, 0);
};

module.exports = passphrases;