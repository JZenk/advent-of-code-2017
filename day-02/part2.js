const checksum = (input) => {
  return input
    .split('\n')
    .map((x) => x.trim()
      .split(/[\s\t/]+/)
      .map((y) => parseInt(y))
    )
    .reduce((gather, value) => {
      for (let i = 0; i < value.length; i++) {
        const potentials = value.filter((x) => x !== value[i]);
        
        for (let j = 0; j < potentials.length; j++) {
          if (value[i] % potentials[j] === 0) {
            return gather + value[i] / potentials[j];
          }
        }
      }
    }, 0);
};

module.exports = checksum;