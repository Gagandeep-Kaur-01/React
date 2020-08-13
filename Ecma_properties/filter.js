/* It creates a new array that contains elements, 
which got filtered by making array elements pass some condition
*/

var arr = ['hockey', 'cricket', 'basketball', 'running'];

const result = arr.filter(arr => arr.length > 6);

console.log( result)
// Output: [ 'cricket', 'basketball', 'running' ]