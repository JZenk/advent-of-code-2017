const checksum = (input) => {
  return input
    .split('\n')
    .map((x) => x.trim()
      .split(/[\s\t/]+/)
      .map((y) => parseInt(y))
    )
    .reduce((gather, value) => {
      const high = Math.max.apply(null, value);
      const low = Math.min.apply(null, value);
    
      return gather + Math.abs(high - low);
    }, 0);
};

module.exports = checksum;