/*
The map() method creates a new array by mapping every element of the array (on which the map is used).
*/

let arr = [2,4,6,8,0];
let newarr  = arr.map(function(element) {
    return element * element;
});

console.log(newarr); 
// prints an array that has squares of the first array
// i.e. [ 4, 16, 36, 64, 0 ]


// ---------------------------------------------------------
// Create a map function to iterate through an array and return it's all values

/* 
.map() creates an array from calling a specific function on each item in the parent array. 
.map() is a non-mutating method that creates a new array as opposed to mutating methods, which only make changes to the calling array.
*/

console.log('Calling a Function on Each Item in an Array');

let array1 = [2,4,6,8,10];
let array2  = array1.map(function(item) {
    return item * item;
});

console.log(array2); 

//using arrow function
let arr = [2,4,6,8,10];
let newarr = arr.map(items => {
    return items * 2;
}) 

console.log(newarr); 
