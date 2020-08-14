/*
it parses a json string that is like an object.
*/

let jsonString = '{"a" : 1,"b" : 2}';

let obj = JSON.parse(jsonString);

console.log(obj.b); // results is 2.

console.log(JSON.stringify({x:5, y:6}));