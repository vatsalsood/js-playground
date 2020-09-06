// With built-in js functions
const stringReversal = (value) => {
  // Check if valid string
  if (typeof value === "string" && value.length > 2 && !value) {
    let strArray = value.split("");
    return strArray.reverse().join("");
  }
};

// Without built-in js functions
// Iterative approach
const stringReversal1 = (value) => {
  const reversed = [];
  for (let i = value.length; i >= 0; i--) {
    reversed.push(value[i]);
  }
  return reversed.join("");
};

// With Spread operator
const stringReversal2 = (value) => [...value].reverse().join("");

// Recursive approach
const recursiveStringReversal = (value) => {
  if (value.length > 0) {
    let lastChar = value[value.length - 1];
    let remStr = value.substr(0, value.length - 1);
    if (lastChar !== "") {
      return lastChar + recursiveStringReversal(remStr);
    }
  } else {
    return "";
  }
};

let newString = stringReversal("my name is vatsal");
console.log(newString);
