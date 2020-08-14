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