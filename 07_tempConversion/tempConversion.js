const convertToCelsius = function(tempInFahren) {
  let tempInCelcius = 5/9 * (tempInFahren - 32)
  let rounded = Math.round(tempInCelcius * 10) / 10
  return rounded
};

const convertToFahrenheit = function(tempInCel) {
  let tempInFahren = 9/5 * (tempInCel) + 32
  let rounded = Math.round(tempInFahren * 10) / 10
  return rounded
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
