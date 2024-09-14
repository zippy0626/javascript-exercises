const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS";
  }
  n = parseInt(n);
  return Math.round(
    (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) /
      Math.sqrt(5)
  );
};

// Do not edit below this line
module.exports = fibonacci;
