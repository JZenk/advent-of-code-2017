const inverseCaptcha = (input) => {
  return input
    .split('')
    .map((x) => parseInt(x))
    .reduce((gather, value, index, array) => {
      const half = array.length /2;
    
      if(index + half <= array.length -1) {
        if (value === array[index + half]) {
          return gather + value;
        }
      } else {
        const skip = index + half - array.length;
        
        if (value === array[skip]){
          return gather + value;
        }
      }
      return gather;
    }, 0);
};

module.exports = inverseCaptcha;