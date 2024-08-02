const convertToCelsius = function(fahr) {
  let celsius = (fahr - 32) * (5/9);  
  let rounded = Math.round(celsius * 10) / 10
  return rounded
};

const convertToFahrenheit = function(cels) {
  let fahrenheit = (9/5 * cels) + 32;
  let rounded = Math.round(fahrenheit * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
