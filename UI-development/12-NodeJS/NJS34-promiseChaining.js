chainPromise.then(function(result){
    console.log(result);
    return "This is the second promise.";
}).then(function(result){
    console.log(result);
    return "This is the third promise.";
}).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log("An error occurred: " + error.message);
});

//using arrow functions
chainPromise.then(result => {
    console.log(result);
    return "This is the second promise.";
}).then(result => {
    console.log(result);
    return "This is the third promise.";
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log("An error occurred: " + error.message);
});