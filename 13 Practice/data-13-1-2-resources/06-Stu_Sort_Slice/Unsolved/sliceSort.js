// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
var numArray2 = numArray.sort(function compareFunction(firstNum, secondNum){
    return secondNum-firstNum;
});

// Print the results to the console
console.log(numArray2);
// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
var numArray3 = numArray.sort((firstNum, secondNum) => secondNum-firstNum);
console.log(numArray3);


// Reverse the array order
var numArray4 = numArray.reverse();
console.log(numArray4);

// Sort the array in ascending order using an arrow function
var numArray5 = numArray.sort((firstNum, secondNum) => firstNum-secondNum);
console.log(numArray5);

// Slice the first five elements of the sortedAscending array, assign to a variable
