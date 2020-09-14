// Selection sort

// Find the lowest number and add it to the 1st index, then find the lowest number again and add it to the 2nd
// index and so on...
// Store the lowest in some variable and compare it with every element in the array

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  for (let j = 0; j < array.length; j++) {
    let smallest = array[j];
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
        array[i] = array[j];
        array[j] = smallest;
      }
    }
  }
};

selectionSort(numbers);
