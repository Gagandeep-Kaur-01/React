/*
Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
*/
let arr1 = [1,2,3];
let arr2 = [4,5];
let newArr = [...arr1, ...arr2];

console.log(newArr);
console.log(' ');


function sum(x,y,z) {
    return x + y + z;
}
const numbers = [2, 4, 6];
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));
