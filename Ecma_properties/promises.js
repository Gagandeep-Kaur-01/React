/*
It is used to handle Asynchronous Programming in a more elegant way.
*/

let myPromise = new Promise((resolve, reject) => {
    let theDecider = true;

    if(theDecider) {
        resolve("success");
    }
    else {
        reject("failure");
    }
});

myPromise.then(res => {
    console.log('res: ', res);
});

myPromise.catch(err => {
    console.log('err: ', err);
});
