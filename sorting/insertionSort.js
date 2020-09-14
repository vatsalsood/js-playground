// Maybe loop in the backward direction and see if the previous integer is smaller/greater
// [6,44,99,2,1,5,63,84,283,4,0]
// [1,2,6,44,99,5,63,84,283,4,0]

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] < array[i - 1]) {
      let temp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = temp;
    }
  }

  console.log(array);
}

insertionSort(numbers);
