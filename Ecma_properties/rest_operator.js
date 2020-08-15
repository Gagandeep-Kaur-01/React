// usage of (...) operator 

/*
Rest Operator is used to handle function parameters. It uses three dots as its syntax (i.e …).
*/

function fun(a, ...b) {
    console.log('a: ' +a+ 'b:' +b);
}

fun(1,2,3,4);


/*
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
A function's last parameter can be prefixed with 
... which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array
Only the last parameter can be a "rest parameter".
*/


