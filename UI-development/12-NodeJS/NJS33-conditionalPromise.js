const checkResult = new Promise(function(resolve, reject) {
    var score = 85;
    if(score >= 35) {
        resolve("Congratulations! You passed the exam.");
    } else {
        reject("Sorry! You failed the exam.");
    }
});

checkResult.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});


//using arrow functions
const checkResultArrow = new Promise((resolve, reject) => {
    var score = 25;
    if(score >= 35) {
        resolve("Congratulations! You passed the exam.");
    }
    else {
        reject("Sorry! You failed the exam.");
    }
});

checkResultArrow.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});