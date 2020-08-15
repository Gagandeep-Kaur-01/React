let a, b, rest;
[a, b] = [5, 10];
console.log(a);  
console.log(b);  
console.log(' ');

[a, b, ...rest] = [5, 10, 15, 20, 25, 30];
console.log(a); 
console.log(b); 
console.log(rest); 
console.log(' ');
({ a, b } = { a: 15, b: 10 });
console.log(a);
console.log(b);
console.log(' ');

({a, b, ...rest} = {a: 15, b: 10, c: 15, d: 20});
console.log(a);
console.log(b);
console.log(rest);
console.log(' ');
