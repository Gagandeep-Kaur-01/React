//Create a function used to extract values from an array in destructuring way



const arr = [1, 2];
const[x, y] = arr;
console.log('x: ' +x+ '; '+ 'y: '+y);

const array = [5, 10];
const[a, b] = array;
function foo([a, b]) {
    return foo;
 }
 console.log(`param1: ${a}, param2: ${b}`);


 function f() {
     return [1, 2];
 }

 let p, q;
 [p, q] = f();
 console.log(p);
 console.log(q);
