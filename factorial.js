// Factorial: 6! = 6x5x4x3x2x1
// Factorial: 6! = 6 x 5!

const recursionByLoop = (factorial) => {
  let num = factorial;
  for (let i = factorial - 1; i > 1; i--) {
    if (i == 1) {
      break;
    }
    num = num * i;
  }
  return num;
};

const recursion = (factorial, num = 1) => {
  if (factorial == 1) {
    return num;
  }
  num = num * factorial;
  return recursion(factorial - 1, num);
};

recursionByLoop(5);
