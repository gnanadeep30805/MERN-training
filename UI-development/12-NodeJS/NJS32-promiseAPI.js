const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise 1 resolved");
    }, 2000);
});
promise1.then(function(result) {
    console.log(result);
});

//using arrow function
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000);
});
promise2.then(result => {
    console.log(result);
});