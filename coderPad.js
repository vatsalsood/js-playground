/*
In 30 minutes or less, please write solutions to the following (as many as you can)...

Given a string, output the reverse ("reverse" -> "esrever")
Given a sentence, output the words in reverse order ("bob likes dogs" -> "dogs likes bob")
Given a list of numeric values, output the minimum value
Given a list of numeric values, output the maximum value
Given two numeric values, a numerator and denominator, calculate the remainder
Given a list of values which contains duplicates, output the distinct values ("1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
Given a list of values which contains duplicates, output the distinct values and the number of occurrences of that value (the list above becomes "1(3) 3(3) 5(2) 7(1)")
*/

const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

function reverseString(text){
  var splitString = text.split("");
  var reversedArr = splitString.reverse();
  var joinedArr = reversedArr.join("");
  return joinedArr;
}

function reverseSentence(text){
  var splitString = text.split(" ");
  var reversedArr = splitString.reverse();
  var joinedArr = reversedArr.join(" ");
  return joinedArr;
}

// Use the spread operator to add the array to the min function
const minimumNumber = numberArray => Math.min(...numberArray);

const maximumNumber = numberArray => Math.max(...numberArray);

const getModulus = (numerator, denominator) => numerator%denominator;

// made the assumption that the list of distinct numbers is an array
const distinctValues = (duplicateArr) =>[...new Set(duplicateArr)];

const countDistinctValues = (duplicateArr) =>{
  let distinctValues =[...new Set(duplicateArr)];
  let distinctObject = {};
  for (let i= 0 ; i < distinctValues.length ; i ++ ){
    let count = 0;
    for (let j = 0 ; j< duplicateArr.length ; j++){
      if(distinctValues[i] === duplicateArr[j]){
        count++;
      }
    }
    console.log( distinctValues[i] + "("+count+")");
  }
}

_.times(1, countDistinctValues([1,3,5,3,7,3,1,1,5]));



