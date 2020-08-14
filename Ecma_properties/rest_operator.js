/*
Rest Operator is used to handle function parameters. It uses three dots as its syntax (i.e …).
*/

function fun(a, ...b) {
    console.log('a: ' +a+ 'b:' +b);
}

fun(1,2,3,4);
