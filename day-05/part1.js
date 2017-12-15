const trampolines = (input) => {
  const array = input
    .split('\n')
    .map((x) => parseInt(x));
  
  let index = 0;
  let total = 0;
  
  while (index < array.length) {
    const steps = array[index];
    
    array[index] += 1;
    total += 1;
    
    index += steps;
  }
  
  return total;
};

module.exports = trampolines;