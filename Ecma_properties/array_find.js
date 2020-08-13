var numbers = [2, 4, 6, 8, 10];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 4;  
}

console.log(first); //returns 6