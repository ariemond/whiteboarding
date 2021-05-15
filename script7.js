////////////////////////////////////

//Write a function that takes an array of numbers and returns an array with only even numbers.

let evenNumbers = [2,4,6,8,10,12,16];
let unevenNumbers = [1,3,5,7,9,11,15];
let mixedNumbers = [0, 1, 6, 7, 3, 14];

function returnEvenNumbersFromArray(array) {
	finishedArray = []
	array.forEach(function(num) {
  	if(!(num % 2)) {
    	finishedArray.push(num)
    }
  })
  return finishedArray;
};

console.log(returnEvenNumbersFromArray(evenNumbers));
console.log(returnEvenNumbersFromArray(unevenNumbers));
console.log(returnEvenNumbersFromArray(mixedNumbers)); 

//OR FILTER

function filterEvens(arr) {
    return arr.filter(number => number % 2 == 0)
};

console.log(filterEvens(mixedNumbers));

//OR 

let inputs = [1, 2, 3, 4, 5, 6];
let result = inputs.filter(x => x % 2 == 0);
console.log(result);

////////////////////////////////////

//Write a function that will zap away X's in a string and replace them with *'s

const inputString = "My favourite word is either xylophone or exactly"
//expectedOutput = "My favourite word is either *ylophone or e*actly"

// Solution
function robotZap2(string) {
  let newString = "";

  for (i = 0; i < string.length; i++) {
    newString = string.charAt(i) == "x" ? newString.concat("*") : newString.concat(string.charAt(i));
  }
  return newString;
}

console.log(robotZap2(inputString));

//OR

const robotZap = inputString => {
    return inputString.split('').map(letter => letter === "x" ? "*" : letter).join('');
}

console.log(robotZap(inputString));


//OR

const robotZap3 = inputString =>{
    return inputString.split('').reduce((zapped,currentLetter) => zapped + (currentLetter==="x" ? "*" : currentLetter), '');
};

// console.log(robotZap3(inputString));


///////////////////////////////////

//Write a function that capitalizes every word in a sentence

function toUppercase(string) {
    return string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };

console.log(toUppercase('this is a sentence'));


////////////////////////////////////

 //Write a function that removes all duplicates from an array of strings.
  
 const fruitArray = ['banana', 'apple', 'orange', 'lemon', 'apple', 'lemon'];
  
 //method one
 
 function removeDuplicates(array) {
     return array.filter((value, index) => array.indexOf(value) === index);
 };
 console.log(removeDuplicates(fruitArray));
 
 //Basically, we iterate over the array and, for each element, 
 //check if the first position of this element in the array is equal to 
 //the current position. Obviously, these two positions are different for duplicate elements.
 
 
 //method two
 
 function removeDuplicates2(array) {
     return [...new Set(array)];
 };
 console.log(removeDuplicates2(fruitArray));
 
 
 //method three
 
 function removeDuplicates3(array) {
     let unique = [];
     array.forEach(element => {
         if (!unique.includes(element)) {
             unique.push(element)
         }
     });

     return unique;
 }

 console.log(removeDuplicates3(fruitArray));
 
 //////////////////////////////////////////////////////////////

 /* ===================== Find the stray number =================== */
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Write a function that takes in such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2

const numArray = [17, 17, 3, 17, 17, 17, 17];
// const numArray = [17, 3, 3, 3, 3];

//find the two unique numbers
//create an array of the number of times each unique value occurs
//return the number that occurs once

function stray(numbers) {
   const uniques = [...new Set(numbers)];

   const lengths = uniques.map(unique => numbers.filter(number => number === unique).length)

   return uniques[lengths.findIndex(length => length===1)]
}
// console.log(stray(numArray));


function stray2(nums){
   const uniques = [...new Set(nums)];
   return nums.filter(x => x === uniques[0]).length === 1 ? uniques[0] : uniques[1];
}

// console.log(stray2(numArray));


//find the number in the array that has the firstIndex of and lastIndexof equal to one another...then is is only there once
const stray3 = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

// console.log(stray3(numArray));


const stray4 = nums => {
   nums.sort((a,b) => a-b);
   return nums[0] === nums[1] ? nums.pop() : nums[0];
}
// console.log(stray4(numArray));


 //////////////////////////////////////////////////////////////


 //Write a function that would allow you to do this:
  
 let addSix = createBase(6);
 addSix(10); //returns 16
 addSix(21); //retruns 27

//Answer:

function createBase(baseNumber) {
 return function(n) {
   return baseNumber + n;
 };
};

console.log(addSix(10)); //returns 16
console.log(addSix(21)); //retruns 27

/////////////////////////////////////////////////////////////////////////


//Write a function that would allow you to do this:
multiply(5)(6);   //returns 30

//Answer

function multiply(a) {
return function(b) {
 return a * b;
}
};

console.log(multiply(5)(6));

/////////////////////////

//FIZZ BUZZ! Create a for loop that iterates up to 100, while outputting 'fizz' at multiples of 3,
// 'buzz' at multiples of 5, and 'fizzbuzz' at multiples of 3 and 5.

// for (let i = 0; i <= 100; i++) {
//   let f = i % 3 === 0,
//   b = i % 5 === 0;
//   console.log(f ? (b ? 'Fizzbuzz' : 'Fizz') : b ? 'Buzz' : i)
// };

for (let i=1; i < 101; i++){
 if (i % 15 == 0) console.log("FizzBuzz");
 else if (i % 3 == 0) console.log("Fizz");
 else if (i % 5 == 0) console.log("Buzz");
 else console.log(i);
};

////////////////////////