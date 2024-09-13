const add = function(a ,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	if (array.length > 0) { // the sum() was not returning a value
    return array.reduce((total, currentNum) => {
      return total + currentNum; // this is in it's own scope
    }, 0)
  } else {
    return 0;
  };
};

const multiply = function(array) {
  return array
    .reduce((total, num) => {
      return total * num
    }, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    let sum = 1;

    for (let i = 1; i <= num; i++) {
      sum *= i
    };

    return sum
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
