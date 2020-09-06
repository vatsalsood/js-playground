const fibbonacciIterative = (position) => {
  let test = [];
  for (let i = 0; i <= position; i++) {
    if (i == 0 || i == 1) {
      test[i] = i;
    } else {
      test[i] = test[i - 1] + test[i - 2];
    }
  }
  return test[position];
};

const fibbonacciRecursive = (position, counter = 0, test = []) => {
  if (position < 2) {
    return position;
  } else {
    return (
      fibbonacciRecursive(position - 1) + fibbonacciRecursive(position - 2)
    );
  }
};
