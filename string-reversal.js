
// With built-in js functions
const stringReversal = value => {
  let strArray = value.split('');
  return strArray.reverse().join('');
}

// Without built-in js functions
const stringReversal1 = value => {
    const reversed = [];
    for(let i = value.length; i >= 0 ; i--){
        reversed.push(value[i]);
    }
    return reversed.join('');
}

// With Spread operator

const stringReversal2= value => [...value].reverse().join('');

let newString = stringReversal("my name is vatsal");
console.log(newString);

