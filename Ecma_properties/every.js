const arr = [1, 2, 3, 4, 5];
let ret = arr.every(val => {
    return val > 3
})
console.log(ret); // returns false

/*
if every element satisfies then returns true, 
if at least one element doesn’t satisfy the condition then returns false.
*/