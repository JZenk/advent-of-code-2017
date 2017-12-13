const inverseCaptcha = (input) => {
  return input
    .split('')
    .map((x) => parseInt(x))
    .reduce((gather, value, index, array) => {
      if(index < array.length -1) {
        if (value === array[index + 1]) {
          return gather + value;
        }
      } else {
        if (value === array[0]){
          return gather + value;
        }
      }
      return gather;
    }, 0);
};

module.exports = inverseCaptcha;